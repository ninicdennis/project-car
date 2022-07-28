import { Navbar, Button, NavLink } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import Link from 'next/link';
import { useUserState } from '../../stores/Authentication';
import { MainRoutes } from './constants';
import { useStyles } from './styles';

const NavBarComponenet = ({ opened }: { opened: boolean }) => {
	const [{ session: userSession }, actions] = useUserState();
	const { classes } = useStyles();

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
			{MainRoutes.map(({ key, href, userAuth, title, children, icon: navIcon }) => {
				if (userAuth && !userSession) return null;
				if (!userAuth && userSession) return null;
				if (children) {
					return (
						<NavLink key={key} label={title} icon={navIcon}>
							{children?.map(({ href: hrefChild, title: titleChild, icon }) => (
								<Link key={hrefChild} href={hrefChild} passHref>
									<NavLink icon={icon} label={titleChild} component='a' />
								</Link>
							))}
						</NavLink>
					);
				}
				return (
					<Link key={key} href={href} passHref>
						<NavLink icon={navIcon} label={title} component='a' />
					</Link>
				);
			})}
			<div className={classes.flexEnd}>{userSession && <Button onClick={signOut}>Sign Out</Button>}</div>
		</Navbar>
	);
};

export default NavBarComponenet;
