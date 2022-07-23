import { Navbar, Button, Grid, Text } from '@mantine/core';
import Link from 'next/link';
import { useEffect } from 'react';
import { useGetUserSession, useSignOut } from '../../queryHooks/Authentication';
import { MainRoutes } from './constants';

const NavBarComponenet = ({ opened }: { opened: boolean }) => {
	const { isLoading, data: userSession, refetch } = useGetUserSession();
	const signOutMutation = useSignOut();

	useEffect(() => {
		refetch();
	});

	return (
		<Navbar p='md' hiddenBreakpoint='sm' hidden={!opened} width={{ sm: 200, lg: 300 }}>
			<Grid justify='center'>
				{!isLoading &&
					MainRoutes.map(({ href, title, userLoggedIn }) => {
						if (userLoggedIn && !userSession) return null;
						if (!userLoggedIn && userSession) return null;

						return (
							<Grid.Col key={href}>
								<Link href={href} passHref>
									<Button variant='subtle' component='a' fullWidth>
										<Text>{title}</Text>
									</Button>
								</Link>
							</Grid.Col>
						);
					})}
			</Grid>
			<div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', height: '100%' }}>
				{userSession && <Button onClick={() => signOutMutation.mutate()}>Sign Out</Button>}
			</div>
		</Navbar>
	);
};

export default NavBarComponenet;
