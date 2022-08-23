import { IconCalendarEvent, IconShoppingCartPlus, IconUserCircle } from '@tabler/icons';
type GetColor = (color: string) => string;

export interface TaglineData {
	icon: (getColor: GetColor) => JSX.Element;
	title: string;
	subtext: string;
	href: string;
	buttonSubtext: string;
}

export const TAGLINE_CARD: TaglineData[] = [
	{
		icon: (getColor) => <IconCalendarEvent width={60} height={60} color={getColor('orange')} />,
		title: 'Events',
		subtext: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nisl vulputate, dapibus
    augue nec, auctor enim. Etiam dictum interdum vulputate. Integer facilisis fringilla laoreet. Nulla
    et augue luctus, mattis lorem non, rhoncus lacus. Morbi ut euismod dui. Duis at consequat augue.
    Vestibulum id bibendum nisi.`,
		href: '/events/view',
		buttonSubtext: 'See Events',
	},
	{
		icon: (getColor) => <IconUserCircle width={60} height={60} color={getColor('blue')} />,
		title: 'Profiles',
		subtext: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nisl vulputate, dapibus
    augue nec, auctor enim. Etiam dictum interdum vulputate. Integer facilisis fringilla laoreet. Nulla
    et augue luctus, mattis lorem non, rhoncus lacus. Morbi ut euismod dui. Duis at consequat augue.
    Vestibulum id bibendum nisi.`,
		href: '/profile',
		buttonSubtext: 'Setup Profile',
	},
	{
		icon: (getColor) => <IconShoppingCartPlus width={60} height={60} color={getColor('green')} />,
		title: 'Marketplace',
		subtext: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nisl vulputate, dapibus
    augue nec, auctor enim. Etiam dictum interdum vulputate. Integer facilisis fringilla laoreet. Nulla
    et augue luctus, mattis lorem non, rhoncus lacus. Morbi ut euismod dui. Duis at consequat augue.
    Vestibulum id bibendum nisi.`,
		href: '/market',
		buttonSubtext: 'View Marketplace',
	},
];
