import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { AppShellWrapper } from '@components/AppShell';
import { NotificationsProvider } from '@mantine/notifications';
import { useUserState } from '@stores/Authentication';
import { useEffect } from 'react';

export default function App(props: AppProps) {
	const { Component, pageProps } = props;
	const [{ user, session }, actions] = useUserState();

	useEffect(() => {
		actions.getUserSession();
	}, []);

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
						<Component {...pageProps} user={user} session={session} />
					</AppShellWrapper>
				</NotificationsProvider>
			</MantineProvider>
		</>
	);
}
