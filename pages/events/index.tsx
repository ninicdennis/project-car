import { Text } from '@mantine/core';
import Router from 'next/router';
import { useEffect } from 'react';
import { useUserState } from '../../stores/Authentication';

const EventsPage = () => {
	const [{ user, session: userSession }] = useUserState();
	useEffect(() => {
		if (!userSession) Router.push('/');
	}, [userSession]);

	return (
		<div>
			<Text>Events</Text>
		</div>
	);
};

export default EventsPage;
