import { IconCalendarEvent, IconHome2, IconLogin, IconSettings, IconUser } from '@tabler/icons';
import { NavigationAccordian } from './types';

export const MainRoutes: NavigationAccordian[] = [
	{
		href: '/home',
		key: 'home',
		title: 'Home',
		icon: <IconHome2 size={16} stroke={1.5} />,
		userAuth: true,
	},
	{
		href: '/profile',
		key: 'profile',
		title: 'Profile',
		icon: <IconUser size={16} stroke={1.5} />,
		userAuth: true,
		children: [
			{
				href: '/profile',
				title: 'View Profile',
				icon: <IconUser size={12} stroke={1.5} />,
			},
			{
				href: '/profile/settings',
				title: 'Settings',
				icon: <IconSettings size={12} stroke={1.5} />,
			},
		],
	},
	{
		href: '/events',
		title: 'Events',
		key: 'events',
		icon: <IconCalendarEvent size={12} stroke={1.5} />,
		userAuth: true,
		children: [
			{
				href: '/events/view',
				title: 'Find an Event',
				icon: <IconCalendarEvent size={12} stroke={1.5} />,
			},
		],
	},
	{
		href: '/login',
		key: 'login',
		title: 'Login',
		icon: <IconLogin size={12} stroke={1.5} />,
		userAuth: false,
	},
	{
		href: '/signup',
		key: 'signup',
		title: 'Sign Up',
		icon: <IconLogin size={12} stroke={1.5} />,
		userAuth: false,
	},
];
