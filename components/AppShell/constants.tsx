import { NavBarRoute } from './types';

export const MainRoutes: NavBarRoute[] = [
	{
		href: '/home',
		title: 'Home',
		userAuthenticated: true,
	},
	{
		href: '/profile',
		title: 'Profile',
		userAuthenticated: true,
		children: [
			{
				href: '/profile/settings',
				title: 'Profile Settings',
				userAuthenticated: true,
			},
		],
	},
	{
		href: '/events',
		title: 'Events',
		userAuthenticated: true,
	},
	{
		href: '/login',
		title: 'Login',
		userAuthenticated: false,
	},
	{
		href: '/signup',
		title: 'Sign Up',
		userAuthenticated: false,
	},
];
