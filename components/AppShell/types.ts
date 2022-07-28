import { Dispatch, SetStateAction } from 'react';

export interface HeaderProps {
	opened: boolean;
	setOpened: Dispatch<SetStateAction<boolean>>;
}
interface NavBarRoute {
	href: string;
	title: string;
	icon: any;
}

export interface NavigationAccordian {
	title: string;
	key: string;
	userAuth: boolean;
	icon: any;
	href: string;
	children?: NavBarRoute[];
}
