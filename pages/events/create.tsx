import { Text } from '@mantine/core';
import Router from 'next/router';
import { useEffect } from 'react';
import { InitialState } from '@stores/types';

const CreateEvent = ({ session }: InitialState) => {
	useEffect(() => {
		if (!session) Router.push('/');
	}, [session]);

	return (
		<div>
			<Text>Create Events</Text>
		</div>
	);
};

export default CreateEvent;
