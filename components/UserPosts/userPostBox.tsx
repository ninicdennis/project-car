import { Avatar, Button, Card, Collapse, Container, Group, MediaQuery, Space, Text, Title } from '@mantine/core';
import RichTextEditor from '@components/RichTextEditor';
import { Posts } from 'types/posts/types';
import dayjs from 'dayjs';
import { IconMessage, IconThumbDown, IconThumbUp } from '@tabler/icons';
import { useEffect, useState } from 'react';
import { COMMENT_CONTROLS } from '@components/RichTextEditor/constants';
import { notificationTrigger } from '@utils/notification';
import { callDelete, callPost, callPut } from '@utils/requests';

const UserPostBox = ({ post, user_id }: { post: Posts; user_id: string }) => {
	const [liked, setLiked] = useState<boolean | null>(null);
	const [viewComment, setViewComment] = useState(false);
	const [commentMessage, setCommentMessage] = useState('');
	const { id, title, message, created_at, Author, post_data, post_like_dislike } = post;
	const userLikeDislike = post_like_dislike[0];

	useEffect(() => {
		if (!userLikeDislike) return;
		const { liked, disliked } = userLikeDislike;
		if (liked) {
			setLiked(true);
		} else if (disliked) {
			setLiked(false);
		}
	}, [userLikeDislike]);

	const handleLikedChange = (type: 'liked' | 'disliked') => {
		if ((liked === null && type === 'liked') || (liked === false && type === 'liked')) {
			setLiked(true);
			handleLikePost('liked');
		} else if ((liked === null && type === 'disliked') || (liked === true && type === 'disliked')) {
			setLiked(false);
			handleLikePost('disliked');
		} else if ((liked === true && type === 'liked') || (liked === false && type === 'disliked')) {
			setLiked(null);
			handleLikeDelete();
		}
	};

	const handleLikeDelete = async () => {
		try {
			await callDelete({
				url: `/api/posts/interact/${userLikeDislike.id}`,
			});
		} catch (e) {
			notificationTrigger({ title: 'Error!', message: 'Error! Please try action again!', type: 'error' });
		}
	};

	const handleLikePost = async (type: 'liked' | 'disliked') => {
		try {
			if (userLikeDislike?.id) {
				await callPut({
					url: `/api/posts/interact/${userLikeDislike.id}`,
					body: {
						type,
					},
				});
			} else {
				await callPost({
					url: `/api/posts/interact/${null}`,
					body: {
						type,
						post_id: id,
						user_id,
					},
				});
			}
		} catch (e) {
			notificationTrigger({ title: 'Error!', message: 'Error! Please try action again!', type: 'error' });
		}
	};

	return (
		<Container size='md'>
			<Card>
				<Group>
					<Avatar radius='sm' size='lg' src={null} />
					<div>
						<Title order={4}>{Author.username}</Title>
						<Text>{dayjs(created_at).format('YYYY-MM-DD HH:mm')}</Text>
					</div>
				</Group>
				<Space p='md' />
				<Title order={4}>{title}</Title>
				<Space p='xs' />
				<RichTextEditor value={message} readOnly onChange={() => null} />
				<Space p='md' />
				<MediaQuery largerThan='sm' styles={{ display: 'none' }}>
					<Group spacing={'sm'} position='center'>
						<Button
							leftIcon={<IconThumbUp />}
							variant={liked === true ? 'filled' : 'outline'}
							onClick={() => handleLikedChange('liked')}
						/>
						<Button
							leftIcon={<IconThumbDown />}
							variant={liked === false ? 'filled' : 'outline'}
							onClick={() => handleLikedChange('disliked')}
						/>
						<Button
							leftIcon={<IconMessage />}
							variant={viewComment ? 'filled' : 'outline'}
							onClick={() => setViewComment((prev) => !prev)}
						/>
					</Group>
				</MediaQuery>

				<MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
					<Group spacing={'sm'}>
						<Button
							leftIcon={<IconThumbUp />}
							variant={liked === true ? 'filled' : 'outline'}
							onClick={() => handleLikedChange('liked')}
						>
							{post_data?.liked || 0} Like
						</Button>
						<Button
							leftIcon={<IconThumbDown />}
							variant={liked === false ? 'filled' : 'outline'}
							onClick={() => handleLikedChange('disliked')}
						>
							{post_data?.disliked || 0} Dislike
						</Button>
						<Button
							leftIcon={<IconMessage />}
							variant={viewComment ? 'filled' : 'outline'}
							onClick={() => setViewComment((prev) => !prev)}
						>
							Comments
						</Button>
					</Group>
				</MediaQuery>
				<Space mb='xs' />
				<Collapse in={viewComment}>
					<RichTextEditor value={commentMessage} onChange={setCommentMessage} controls={COMMENT_CONTROLS} mb={8} />
					<Button>Post</Button>
					<Space p='xs' />
					{/*  note here, change the values with actual data, this is just main page data to see how this would look. */}
					<Card withBorder mb={8}>
						<Group>
							<Avatar src={null} radius='sm' />
							<div>
								<Title order={5}>{Author.username}</Title>
								<Text>{dayjs(created_at).format('YYYY-MM-DD HH:mm')}</Text>
							</div>
						</Group>
						<RichTextEditor value={message} readOnly onChange={() => null} />
					</Card>
					<Card withBorder>
						<Group>
							<Avatar src={null} radius='sm' />
							<div>
								<Title order={5}>{Author.username}</Title>
								<Text>{dayjs(created_at).format('YYYY-MM-DD HH:mm')}</Text>
							</div>
						</Group>
						<RichTextEditor value={message} readOnly onChange={() => null} />
					</Card>
				</Collapse>
			</Card>
			<Space p='md' />
		</Container>
	);
};

export default UserPostBox;
