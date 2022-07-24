import { Session } from '@supabase/supabase-js';

export interface AuthRegister {
	username: string;
	email: string;
	password: string;
	id?: string;
}
export interface AuthLogin {
	email: string;
	password: string;
}

export interface FETCH {
	url: string;
	method: 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH';
	body?: Object;
}

export interface InitialState {
	user: {
		id: string;
		username: string;
		email: string;
		image_url: string;
	};
	session: Session | null;
}
