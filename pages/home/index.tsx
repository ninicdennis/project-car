import { Text } from '@mantine/core';
import Router from 'next/router';
import { useGetUserSession } from '../../queryHooks/Authentication';

const Homepage = () => {
	const { isLoading, data: userSession } = useGetUserSession();

	if (!isLoading && !userSession) Router.push('/');

	return (
		<div>
			<Text>Homepage</Text>
		</div>
	);
};

export default Homepage;
