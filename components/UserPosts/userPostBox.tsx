import { Avatar, Button, Card, Collapse, Container, Group, MediaQuery, Space, Text, Title } from '@mantine/core';
import RichTextEditor from '@components/RichTextEditor';
import { Posts } from 'types/posts/types';
import dayjs from 'dayjs';
import { IconMessage, IconThumbDown, IconThumbUp } from '@tabler/icons';
import { useEffect, useState } from 'react';
import { COMMENT_CONTROLS } from '@components/RichTextEditor/constants';
import { notificationTrigger } from '@utils/notification';
import { callDelete, callGet, callPost, callPut } from '@utils/requests';
import { post_comments } from '@prisma/client';

const UserPostBox = ({ post, user_id }: { post: Posts; user_id: string }) => {
	const [liked, setLiked] = useState<boolean | null>(null);
	const [viewComment, setViewComment] = useState(false);
	const [commentMessage, setCommentMessage] = useState('');
	const [comments, setComments] = useState<(post_comments & { CommentAuthor: { username: string } })[]>([]);
	// ? TODO: Get data after like dislike
	const { id, title, message, created_at, post_data, liked: postLiked, disliked: postDisliked, username } = post;

	useEffect(() => {
		if (!post_data) return;
		if (postLiked) {
			setLiked(true);
		} else if (postDisliked) {
			setLiked(false);
		}
	}, [post_data]);

	useEffect(() => {
		if (viewComment && !comments.length) {
			getPostComments(id);
		}
	}, [viewComment]);

	const getPostComments = async (post_id: string) => {
		try {
			await callGet({
				url: `/api/posts/comment/${post_id}`,
			}).then((res) => setComments(res.data));
		} catch (e) {
			notificationTrigger({ title: 'Error!', message: 'Error! Please try action again!', type: 'error' });
		}
	};

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
				url: `/api/posts/interact/${post_data?.id}`,
			});
		} catch (e) {
			notificationTrigger({ title: 'Error!', message: 'Error! Please try action again!', type: 'error' });
		}
	};

	const handleLikePost = async (type: 'liked' | 'disliked') => {
		try {
			if (post_data?.id) {
				await callPut({
					url: `/api/posts/interact/${post_data.id}`,
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

	const handleAddComment = async () => {
		try {
			const body = {
				user_id,
				message: commentMessage,
			};
			await callPost({
				url: `/api/posts/comment/${id}`,
				body,
			}).then(async () => {
				getPostComments(id);
			});
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
						<Title order={4}>{username}</Title>
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
							{postLiked} Like{postLiked && postLiked > 1 ? 's' : ''}
						</Button>
						<Button
							leftIcon={<IconThumbDown />}
							variant={liked === false ? 'filled' : 'outline'}
							onClick={() => handleLikedChange('disliked')}
						>
							{postDisliked} Dislike{postDisliked && postDisliked > 1 ? 's' : ''}
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
					<Button onClick={handleAddComment}>Post</Button>
					<Space p='xs' />
					{/*  note here, change the values with actual data, this is just main page data to see how this would look. */}
					{comments.map(({ CommentAuthor, id, created_at, message }) => (
						<Card withBorder mb={8} key={id}>
							<Group>
								<Avatar src={null} radius='sm' />
								<div>
									<Title order={5}>{CommentAuthor.username}</Title>
									<Text>{dayjs(created_at).format('YYYY-MM-DD HH:mm')}</Text>
								</div>
							</Group>
							<RichTextEditor value={message} readOnly onChange={() => null} />
						</Card>
					))}
				</Collapse>
			</Card>
			<Space p='md' />
		</Container>
	);
};

export default UserPostBox;
