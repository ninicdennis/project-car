import { Text } from '@mantine/core';
import Router from 'next/router';
import { useEffect } from 'react';
import { useUserState } from '../../queryHooks/Authentication';

const Homepage = () => {
	const [{ user, session: userSession }] = useUserState();

	useEffect(() => {
		if (!userSession) Router.push('/');
	}, [userSession]);

	return (
		<div>
			<Text>Homepage</Text>
		</div>
	);
};

export default Homepage;
