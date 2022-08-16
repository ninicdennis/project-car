import { AuthRegister, AuthLogin, InitialState } from './types';
import supabase from '@utils/supabase/init';
import { fetcher } from '@utils/fetcher';
import { createStore, createHook } from 'react-sweet-state';

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
					const user = await fetcher({
						url: 'api/auth/getUser',
						method: 'POST',
						body: { id: session?.user?.id },
					});
					setState({ user, session });
				}
			},
		login:
			(data) =>
			async ({ setState }) => {
				await loginUser(data).then(async (values) => {
					if (values) {
						const session = await getUser();
						const user = await fetcher({ url: 'api/auth/getUser', method: 'POST', body: { id: values.id } });
						setState({ user, session });
					}
				});
			},
		register:
			(data) =>
			async ({ setState }) => {
				await createUser(data).then(async (values) => {
					if (values) {
						const session = await getUser();
						const user = await fetcher({
							url: 'api/auth/createUser',
							method: 'POST',
							body: { username: data.username, id: values.id, email: data.email },
						});
						if (user.error) throw new Error(user.error);
						if (user) {
							setState({ user, session });
						} else setState(initialState);
					}
				});
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
