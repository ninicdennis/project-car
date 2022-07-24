import { Text } from '@mantine/core';
import Router from 'next/router';
import { useEffect } from 'react';
import { useUserState } from '../../../stores/Authentication';

const ProfilePage = () => {
	const [{ user, session: userSession }] = useUserState();
	useEffect(() => {
		if (!userSession) Router.push('/');
	}, [userSession]);

	return (
		<div>
			<Text>Profile Setting Page</Text>
		</div>
	);
};

export default ProfilePage;
