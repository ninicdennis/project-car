import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { AppShellWrapper } from '../components/AppShell';
import { NotificationsProvider } from '@mantine/notifications';

export default function App(props: AppProps) {
	const { Component, pageProps } = props;

	return (
		<>
			<Head>
				<title>Project: Car</title>
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					/** Put your mantine theme override here */
					colorScheme: 'dark',
				}}
			>
				<NotificationsProvider>
					<AppShellWrapper>
						<Component {...pageProps} />
					</AppShellWrapper>
				</NotificationsProvider>
			</MantineProvider>
		</>
	);
}
