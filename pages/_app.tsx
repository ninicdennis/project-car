import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { AppShellWrapper } from '../components/AppShell';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function App(props: AppProps) {
	const { Component, pageProps } = props;
	const queryClient = new QueryClient();

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
				<QueryClientProvider client={queryClient}>
					<AppShellWrapper>
						<QueryClientProvider client={queryClient}>
							<Component {...pageProps} />
							<ReactQueryDevtools initialIsOpen={false} />
						</QueryClientProvider>
					</AppShellWrapper>
				</QueryClientProvider>
			</MantineProvider>
		</>
	);
}
