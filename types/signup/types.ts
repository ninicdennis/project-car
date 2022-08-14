export interface RegisterData {
	username: string;
	password: string;
	email: string;
}

export type RegisterFormValues = {
	email: string;
	password: string;
	username: string;
	secondaryPassword: string;
};
