import { Navbar, NavLink, Divider, useMantineTheme, ScrollArea } from '@mantine/core';
import { IconLogout } from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUserState } from '@stores/Authentication';
import { MainRoutes } from './constants';
import { useStyles } from './styles';
import { notificationTrigger } from '@utils/notification';
import { Dispatch, SetStateAction } from 'react';

const NavBarComponenet = ({ opened, setOpened }: { opened: boolean; setOpened: Dispatch<SetStateAction<boolean>> }) => {
	const [{ session: userSession }, actions] = useUserState();
	const router = useRouter();
	const { classes } = useStyles();
	const theme = useMantineTheme();
	const getColor = (color: string) => theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

	const signOut = async () => {
		setOpened(false);
		actions.signOut().then(() =>
			notificationTrigger({
				title: 'Logged out!',
				message: 'See you soon!',
				type: 'success',
			})
		);
	};

	return (
		<Navbar p='md' hiddenBreakpoint='sm' hidden={!opened} width={{ sm: 300, lg: 300 }}>
			<Navbar.Section grow component={ScrollArea} mx='-xs' px='xs'>
				{MainRoutes.map(({ key, href, userAuth, title, children, icon: navIcon }) => {
					if ((userAuth && !userSession) || (!userAuth && userSession)) return null;
					else if (children) {
						return (
							<div key={key}>
								<NavLink label={title} icon={navIcon(getColor)} styles={{ label: { fontSize: 20 } }}>
									{children?.map(({ href: hrefChild, title: titleChild, icon }) => (
										<Link key={hrefChild} href={hrefChild} passHref>
											<NavLink
												onClick={() => setOpened(false)}
												icon={icon(getColor)}
												label={titleChild}
												component='a'
												active={router.pathname === hrefChild}
												styles={{ label: { fontSize: 18 } }}
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
								<NavLink
									onClick={() => setOpened(false)}
									styles={{ label: { fontSize: 20 } }}
									icon={navIcon(getColor)}
									label={title}
									component='a'
									active={router.pathname === href}
								/>
							</Link>
							<Divider my='sm' />
						</div>
					);
				})}
			</Navbar.Section>
			<Navbar.Section>
				<div className={classes.flexEnd}>
					{userSession && <NavLink label={'Sign Out'} icon={<IconLogout />} onClick={signOut} />}
				</div>
			</Navbar.Section>
		</Navbar>
	);
};

export default NavBarComponenet;
