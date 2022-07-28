import { Navbar, Button, NavLink, Divider, useMantineTheme } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUserState } from '../../stores/Authentication';
import { MainRoutes } from './constants';
import { useStyles } from './styles';

const NavBarComponenet = ({ opened }: { opened: boolean }) => {
	const [{ session: userSession }, actions] = useUserState();
	const router = useRouter();
	const { classes } = useStyles();
	const theme = useMantineTheme();
	const getColor = (color: string) => theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

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
		<Navbar p='md' hiddenBreakpoint='sm' hidden={!opened} width={{ sm: 200, lg: 200 }}>
			{MainRoutes.map(({ key, href, userAuth, title, children, icon: navIcon }) => {
				if (userAuth && !userSession) return null;
				if (!userAuth && userSession) return null;
				if (children) {
					return (
						<div key={key}>
							<NavLink label={title} icon={navIcon(getColor)}>
								{children?.map(({ href: hrefChild, title: titleChild, icon }) => (
									<Link key={hrefChild} href={hrefChild} passHref>
										<NavLink
											icon={icon(getColor)}
											label={titleChild}
											component='a'
											active={router.pathname === hrefChild}
											styles={{ label: { fontSize: 12 } }}
										/>
									</Link>
								))}
							</NavLink>
							<Divider my='sm' />
						</div>
					);
				}
				return (
					<div key={key}>
						<Link href={href} passHref>
							<NavLink icon={navIcon(getColor)} label={title} component='a' active={router.pathname === href} />
						</Link>
						<Divider my='sm' />
					</div>
				);
			})}
			<div className={classes.flexEnd}>{userSession && <Button onClick={signOut}>Sign Out</Button>}</div>
		</Navbar>
	);
};

export default NavBarComponenet;
