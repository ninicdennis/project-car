import Router from 'next/router';
import { useEffect } from 'react';
import { InitialState } from '@stores/types';

import CreatePost from '@components/CreatePost';
const Homepage = ({ session }: InitialState) => {
	useEffect(() => {
		if (!session) Router.push('/');
	}, [session]);

	return (
		<div>
			<CreatePost user_id={session?.user?.id || ''} />
		</div>
	);
};

export default Homepage;
