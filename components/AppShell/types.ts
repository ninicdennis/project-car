import { Dispatch, SetStateAction } from 'react';

export interface HeaderProps {
	opened: boolean;
	setOpened: Dispatch<SetStateAction<boolean>>;
}
export interface NavBarRoute {
	href: string;
	title: string;
	userAuthenticated: boolean;
	children?: NavBarRoute[];
}
