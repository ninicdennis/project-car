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
} from '@tabler/icons';
import { NavigationAccordian } from './types';

type GetColor = (color: string) => string;
export const MainRoutes: NavigationAccordian[] = [
	{
		href: '/home',
		key: 'home',
		title: 'Home',
		icon: (getColor: GetColor) => <IconHome2 size={16} stroke={1.5} color={getColor('red')} />,
		userAuth: true,
	},
	{
		href: '/profile',
		key: 'profile',
		title: 'Profile',
		icon: (getColor: GetColor) => <IconUser size={16} stroke={1.5} color={getColor('blue')} />,
		userAuth: true,
		children: [
			{
				href: '/profile',
				title: 'View Profile',
				icon: (getColor: GetColor) => <IconUser size={12} stroke={1.5} color={getColor('blue')} />,
			},
			{
				href: '/profile/settings',
				title: 'Settings',
				icon: (getColor: GetColor) => <IconSettings size={12} stroke={1.5} color={getColor('blue')} />,
			},
		],
	},
	{
		href: '/events',
		title: 'Events',
		key: 'events',
		icon: (getColor: GetColor) => <IconCalendarEvent size={12} stroke={1.5} color={getColor('orange')} />,
		userAuth: true,
		children: [
			{
				href: '/events/view',
				title: 'Find an Event',
				icon: (getColor: GetColor) => <IconCalendarEvent size={12} stroke={1.5} color={getColor('orange')} />,
			},
			{
				href: '/events/create',
				title: 'Create an Event',
				icon: (getColor: GetColor) => <IconPlus size={12} stroke={1.5} color={getColor('orange')} />,
			},
			{
				href: '/events/map',
				title: 'Event Map',
				icon: (getColor: GetColor) => <IconMap2 size={12} stroke={1.5} color={getColor('orange')} />,
			},
		],
	},
	{
		href: '/market',
		key: 'market',
		title: 'Marketplace',
		icon: (getColor: GetColor) => <IconShoppingCart size={16} stroke={1.5} color={getColor('green')} />,
		userAuth: true,
		children: [
			{
				href: '/market',
				title: 'View Marketplace',
				icon: (getColor: GetColor) => <IconShoppingCartDiscount size={12} stroke={1.5} color={getColor('green')} />,
			},
			{
				href: '/market/create',
				title: 'Create Listing',
				icon: (getColor: GetColor) => <IconPlus size={12} stroke={1.5} color={getColor('green')} />,
			},
		],
	},
	{
		href: '/login',
		key: 'login',
		title: 'Login',
		icon: (getColor: GetColor) => <IconLogin size={12} stroke={1.5} color={getColor('blue')} />,
		userAuth: false,
	},
	{
		href: '/signup',
		key: 'signup',
		title: 'Sign Up',
		icon: (getColor: GetColor) => <IconLogin size={12} stroke={1.5} color={getColor('blue')} />,
		userAuth: false,
	},
];
