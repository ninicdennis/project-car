export interface FETCH {
	url: string;
	method: 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH';
	body?: Record<string, unknown>;
}
export const fetcher = async ({ url, method, body }: FETCH) => {
	return await fetch(url, {
		method,
		body: body ? JSON.stringify(body) : null,
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => {
			return res.json();
		})
		.catch((e) => {
			console.log('Error! ', e);
			return {
				error: true,
				status: e.status,
				statusText: e.statusText,
			};
		});
};
