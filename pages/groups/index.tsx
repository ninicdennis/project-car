import { Text } from '@mantine/core';
import Router from 'next/router';
import { useEffect } from 'react';
import { InitialState } from '@stores/types';

const GroupsPage = ({ session }: InitialState) => {
	useEffect(() => {
		if (!session) Router.push('/');
	}, [session]);

	return (
		<div>
			<Text>Groups</Text>
		</div>
	);
};

export default GroupsPage;
