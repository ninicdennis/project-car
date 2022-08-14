import { Text } from '@mantine/core';
import Router from 'next/router';
import { useEffect } from 'react';
import { InitialState } from '@stores/types';

const MarketPage = ({ session }: InitialState) => {
	useEffect(() => {
		if (!session) Router.push('/');
	}, [session]);

	return (
		<div>
			<Text>View Market</Text>
		</div>
	);
};

export default MarketPage;
