import { NavBarRoute } from './types';

export const MainRoutes: NavBarRoute[] = [
	{
		href: '/home',
		title: 'Homepage',
		userLoggedIn: true,
	},
	{
		href: '/login',
		title: 'Login',
		userLoggedIn: false,
	},
	{
		href: '/signup',
		title: 'Sign Up',
		userLoggedIn: false,
	},
];
