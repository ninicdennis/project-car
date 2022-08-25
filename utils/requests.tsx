import axios, { AxiosRequestConfig } from 'axios';

export interface FETCH {
	url: string;
	body?: Record<string, unknown>;
}

const AXIOS_CONFIG: AxiosRequestConfig = {
	headers: { 'Content-Type': 'application/json' },
	timeout: 30000,
	responseType: 'json',
};

const instance = axios.create(AXIOS_CONFIG);

export const callGet = async ({ url }: FETCH) => {
	return await instance
		.get(url)
		.then((res) => res)
		.catch((e) => {
			// TODO: Ugly, please fix.
			throw Error(e);
		});
};

export const callPost = async ({ url, body }: FETCH) => {
	return await instance
		.post(url, body)
		.then((res) => res)
		.catch((e) => {
			// TODO: Ugly, please fix.
			throw new Error(e);
		});
};

export const callPut = async ({ url, body }: FETCH) => {
	return await instance
		.put(url, body)
		.then((res) => res)
		.catch((e) => {
			// TODO: Ugly, please fix.
			throw Error(e);
		});
};

export const callPatch = async ({ url, body }: FETCH) => {
	return await instance
		.patch(url, body)
		.then((res) => res)
		.catch((e) => {
			// TODO: Ugly, please fix.
			throw Error(e);
		});
};

export const callDelete = async ({ url, body }: FETCH) => {
	return await instance
		.delete(url, body)
		.then((res) => res)
		.catch((e) => {
			// TODO: Ugly, please fix.
			throw Error(e);
		});
};
