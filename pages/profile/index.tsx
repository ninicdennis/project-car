import { Text } from '@mantine/core';
import Router from 'next/router';
import { useEffect } from 'react';
import { InitialState } from '../../stores/types';

const ProfilePage = ({ user, session }: InitialState) => {
	useEffect(() => {
		if (!session) Router.push('/');
	}, [session]);

	return (
		<div>
			<Text>Profile Page</Text>
		</div>
	);
};

export default ProfilePage;
