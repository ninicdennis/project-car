import Router from 'next/router';
import { useEffect, useState } from 'react';
import { InitialState } from '@stores/types';
import { LoadingOverlay, Space } from '@mantine/core';
import CreatePost from '@components/CreatePost';
import UserPosts from '@components/UserPosts';
import { callPost } from '@utils/requests';
import { Posts } from 'types/posts/types';
import { notificationTrigger } from '@utils/notification';

const Homepage = ({ session }: InitialState) => {
	const [posts, setPosts] = useState<Posts[]>();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (!session) Router.push('/');
	}, [session]);

	const handleUpdatePosts = () => {
		getUserPosts();
	};
	const getUserPosts = async () => {
		setLoading(true);
		try {
			const { data } = await callPost({ url: '/api/posts', body: { user_id: session?.user?.id || '' } });
			setLoading(false);
			setPosts(data);
		} catch (e) {
			notificationTrigger({ title: 'Error!', message: 'Post failed, please try again!', type: 'error' });
			// console.log(e);
			setLoading(false);
		}
	};

	useEffect(() => {
		getUserPosts();
	}, []);

	return (
		<div style={{ position: 'relative' }}>
			<CreatePost user_id={session?.user?.id || ''} handleUpdatePosts={handleUpdatePosts} />
			<Space p='lg' />
			{session?.user?.id &&
				posts?.map((post) => <UserPosts key={post?.id} post={post} user_id={session?.user?.id || ''} />)}
			<LoadingOverlay visible={loading} />
		</div>
	);
};

export default Homepage;
