import {
	IconCalendarEvent,
	IconHome2,
	IconLogin,
	IconMap2,
	IconPlus,
	IconSettings,
	IconShoppingCart,
	IconShoppingCartDiscount,
	IconUser,
	IconUsers,
} from '@tabler/icons';
import { NavigationAccordian } from './types';

export const MainRoutes: NavigationAccordian[] = [
	{
		href: '/home',
		key: 'home',
		title: 'Home',
		icon: (getColor) => <IconHome2 size={16} stroke={1.5} color={getColor('red')} />,
		userAuth: true,
	},
	{
		href: '/profile',
		key: 'profile',
		title: 'Profile',
		icon: (getColor) => <IconUser size={16} stroke={1.5} color={getColor('blue')} />,
		userAuth: true,
		children: [
			{
				href: '/profile',
				title: 'View Profile',
				icon: (getColor) => <IconUser size={16} stroke={1.5} color={getColor('blue')} />,
			},
			{
				href: '/profile/settings',
				title: 'Settings',
				icon: (getColor) => <IconSettings size={16} stroke={1.5} color={getColor('blue')} />,
			},
		],
	},
	{
		href: '/groups',
		key: 'groups',
		title: 'Groups',
		icon: (getColor) => <IconUsers size={16} stroke={1.5} color={getColor('violet')} />,
		userAuth: true,
		children: [
			{
				href: '/groups',
				title: 'View Groups',
				icon: (getColor) => <IconUsers size={16} stroke={1.5} color={getColor('violet')} />,
			},
			{
				href: '/groups/create',
				title: 'Create Groups',
				icon: (getColor) => <IconPlus size={16} stroke={1.5} color={getColor('violet')} />,
			},
		],
	},
	{
		href: '/events',
		title: 'Events',
		key: 'events',
		icon: (getColor) => <IconCalendarEvent size={16} stroke={1.5} color={getColor('orange')} />,
		userAuth: true,
		children: [
			{
				href: '/events/view',
				title: 'Find an Event',
				icon: (getColor) => <IconCalendarEvent size={16} stroke={1.5} color={getColor('orange')} />,
			},
			{
				href: '/events/create',
				title: 'Create an Event',
				icon: (getColor) => <IconPlus size={16} stroke={1.5} color={getColor('orange')} />,
			},
			{
				href: '/events/map',
				title: 'Event Map',
				icon: (getColor) => <IconMap2 size={16} stroke={1.5} color={getColor('orange')} />,
			},
		],
	},
	{
		href: '/market',
		key: 'market',
		title: 'Marketplace',
		icon: (getColor) => <IconShoppingCart size={16} stroke={1.5} color={getColor('green')} />,
		userAuth: true,
		children: [
			{
				href: '/market',
				title: 'View Marketplace',
				icon: (getColor) => <IconShoppingCartDiscount size={16} stroke={1.5} color={getColor('green')} />,
			},
			{
				href: '/market/create',
				title: 'Create Listing',
				icon: (getColor) => <IconPlus size={16} stroke={1.5} color={getColor('green')} />,
			},
		],
	},
	{
		href: '/login',
		key: 'login',
		title: 'Login',
		icon: (getColor) => <IconLogin size={16} stroke={1.5} color={getColor('blue')} />,
		userAuth: false,
	},
	{
		href: '/signup',
		key: 'signup',
		title: 'Sign Up',
		icon: (getColor) => <IconLogin size={16} stroke={1.5} color={getColor('blue')} />,
		userAuth: false,
	},
];
