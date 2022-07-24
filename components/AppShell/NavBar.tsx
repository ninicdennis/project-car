import { Navbar, Button, Grid, Text } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import Link from 'next/link';
import { useUserState } from '../../queryHooks/Authentication';
import { MainRoutes } from './constants';

const NavBarComponenet = ({ opened }: { opened: boolean }) => {
	const [{ session: userSession }, actions] = useUserState();

	const signOut = async () => {
		actions.signOut().then(() =>
			showNotification({
				title: 'Logged out!',
				message: 'See you soon!',
				autoClose: 3000,
				color: 'green',
			})
		);
	};

	return (
		<Navbar p='md' hiddenBreakpoint='sm' hidden={!opened} width={{ sm: 100, lg: 200 }}>
			<Grid justify='center'>
				{MainRoutes.map(({ href, title, userAuthenticated, children }) => {
					if (userAuthenticated && !userSession) return null;
					if (!userAuthenticated && userSession) return null;

					return (
						<Grid.Col key={href}>
							<Link href={href} passHref>
								<Button variant='subtle' component='a' fullWidth>
									<Text>{title}</Text>
								</Button>
							</Link>
							{children &&
								children.map(({ href: hrefChild, title: titleChild }) => (
									<Link key={hrefChild} href={hrefChild} passHref>
										<Button variant='subtle' component='a' fullWidth>
											<Text>{titleChild}</Text>
										</Button>
									</Link>
								))}
						</Grid.Col>
					);
				})}
			</Grid>
			<div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', height: '100%' }}>
				{userSession && <Button onClick={signOut}>Sign Out</Button>}
			</div>
		</Navbar>
	);
};

export default NavBarComponenet;
