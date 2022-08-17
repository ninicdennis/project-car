import { AuthRegister, AuthLogin, InitialState, UserResponse } from './types';
import supabase from '@utils/supabase/init';
import { callPost } from '@utils/requests';
import { createStore, createHook } from 'react-sweet-state';
import { AxiosResponse } from 'axios';
import { notificationTrigger } from '@utils/notification';

const initialState: InitialState = {
	user: { id: '', username: '', email: '', image_url: '' },
	session: null,
};
const Store = createStore({
	initialState,
	actions: {
		getUserSession:
			() =>
			async ({ setState }) => {
				const session = await getUser();
				if (!session) return;
				else {
					try {
						const response: AxiosResponse<UserResponse> = await callPost({
							url: 'api/auth/getUser',
							body: { id: session?.user?.id },
						});
						if (response.data) {
							setState({ user: response.data, session });
						} else setState(initialState);
					} catch (e) {
						notificationTrigger({ title: 'Error!', message: 'Could not get user session!', type: 'error' });
					}
				}
			},
		login:
			(data) =>
			async ({ setState }) => {
				await loginUser(data)
					.then(async (values) => {
						if (values) {
							const session = await getUser();
							try {
								const response: AxiosResponse<UserResponse> = await callPost({
									url: 'api/auth/getUser',
									body: { id: values.id },
								});
								if (response.data) {
									notificationTrigger({ title: 'Logged in!', message: 'Welcome back!', type: 'success' });
									setState({ user: response.data, session });
								} else {
									setState(initialState);
								}
							} catch (e) {
								notificationTrigger({ title: 'Error!', message: 'Could not get user session!', type: 'error' });
							}
						}
					})
					.catch(() =>
						notificationTrigger({ title: 'Error!', message: 'Login failed, try again.', type: 'error' })
					);
			},
		register:
			(data) =>
			async ({ setState }) => {
				await createUser(data)
					.then(async (values) => {
						if (values) {
							const session = await getUser();
							try {
								const response: AxiosResponse<UserResponse> = await callPost({
									url: 'api/auth/createUser',
									body: { username: data.username, id: values.id, email: data.email },
								});
								if (response.data) {
									notificationTrigger({
										title: 'Logged in!',
										message: 'Welcome!',
										type: 'success',
									});
									setState({ user: response.data, session });
								} else setState(initialState);
							} catch (e) {
								notificationTrigger({ title: 'Error!', message: 'Could not get user session!', type: 'error' });
							}
						}
					})
					.catch(() =>
						notificationTrigger({ title: 'Error!', message: 'Signup failed, try again.', type: 'error' })
					);
			},
		signOut:
			() =>
			async ({ setState }) => {
				await signOut();
				setState(initialState);
			},
	},
	name: 'userStore',
});

const getUser = async () => {
	return supabase.auth.session();
};

const signOut = async () => {
	return supabase.auth.signOut();
};

const createUser = async ({ email, password, username }: AuthRegister) => {
	const { user, error } = await supabase.auth.signUp({ email, password });
	if (error) throw error;
	if (user) {
		const { id } = user;
		return { id, email, username };
	}
	return null;
};

const loginUser = async ({ email, password }: AuthLogin) => {
	const { user, error } = await supabase.auth.signIn({ email, password });
	if (error) throw error;
	return user;
};

export const useUserState = createHook(Store);
