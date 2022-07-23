import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { createUser, getUser, userLogIn, signOut } from '../pages/api/authentication';
import { AuthRegister, AuthLogin } from './types';

export const useRegisterUser = () => {
	return useMutation(async (values: AuthRegister) => await createUser(values), {
		onError: (err) => console.log(err),
		onSuccess: (data) => {
			console.log(data);
		},
	});
};

export const useLoginUser = () => {
	const queryClient = useQueryClient();

	return useMutation(async (values: AuthLogin) => await userLogIn(values), {
		onError: (err) => console.log(err),
		onSuccess: (value) => {
			queryClient.invalidateQueries(['getUserSession']);
			queryClient.setQueryData(['getUserSession'], value);
		},
	});
};

export const useGetUserSession = () => {
	const queryClient = useQueryClient();

	return useQuery(['getUserSession'], getUser, {
		onSuccess: (value) => {
			queryClient.invalidateQueries(['getUserSession']);
			queryClient.setQueryData(['getUserSession'], value);
		},
	});
};

export const useSignOut = () => {
	const queryClient = useQueryClient();
	return useMutation(async () => await signOut(), {
		onError: (err) => console.log(err),
		onSuccess: () => {
			queryClient.invalidateQueries(['getUserSession']);
			queryClient.setQueryData(['getUserSession'], {});
		},
	});
};
