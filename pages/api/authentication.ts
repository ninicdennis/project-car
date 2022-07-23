import { User } from '@supabase/supabase-js';
import supabase from '../../supabase/init';
import { AuthRegister, AuthLogin } from '../../queryHooks/types';

export const createUser = async ({ username, password, email }: AuthRegister) => {
	const { user, error } = await supabase.auth.signUp({ email, password });
	if (error) throw error;
	return user;
};

export const userLogIn = async ({ password, email }: AuthLogin) => {
	const { user, error } = await supabase.auth.signIn({ email, password });
	if (error) throw error;
	return user;
};

export const getUser = async () => {
	return supabase.auth.session();
};

export const signOut = async () => {
	return supabase.auth.signOut();
};
