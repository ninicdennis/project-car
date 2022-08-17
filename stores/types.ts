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

export interface InitialState {
	user: {
		id: string;
		username: string;
		email: string;
		image_url: string;
	};
	session: Session | null;
}

export interface UserResponse {
	id: string;
	username: string;
	email: string;
	image_url: string;
}

export interface ErrorResponse {
	error: boolean;
	code: string | undefined;
	message: string;
}
