import { Dispatch, SetStateAction } from 'react';

export interface HeaderProps {
	opened: boolean;
	setOpened: Dispatch<SetStateAction<boolean>>;
}
type GetColor = (color: string) => string;

interface NavBarRoute {
	href: string;
	title: string;
	icon: (getColor: GetColor) => JSX.Element;
}

export interface NavigationAccordian {
	title: string;
	key: string;
	userAuth: boolean;
	icon: (getColor: GetColor) => JSX.Element;
	href: string;
	children?: NavBarRoute[];
}
