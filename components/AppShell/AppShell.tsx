import React, { useState } from 'react';
import { AppShell, useMantineTheme, ScrollArea } from '@mantine/core';
import HeaderComponent from './Header';
import FooterComponent from './Footer';
import NavBarComponenet from './NavBar';
export const AppShellWrapper = ({ children }: { children: JSX.Element }) => {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	return (
		<AppShell
			styles={{
				main: {
					background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint='sm'
			asideOffsetBreakpoint='sm'
			fixed
			navbar={<NavBarComponenet opened={opened} />}
			footer={<FooterComponent />}
			header={<HeaderComponent opened={opened} setOpened={setOpened} />}
		>
			<ScrollArea.Autosize maxHeight={'82vh'} mx='auto'>
				{children}
			</ScrollArea.Autosize>
		</AppShell>
	);
};
