import { FETCH } from './types';

export const fetcher = async ({ url, method, body }: FETCH) => {
	return await fetch(url, {
		method,
		body: body ? JSON.stringify(body) : null,
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.catch((e) => {
			throw new Error(e);
		});
};
