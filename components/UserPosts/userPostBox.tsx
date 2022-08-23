import { Avatar, Button, Card, Container, Group, Space, Text, Title } from '@mantine/core';
import RichTextEditor from '@components/RichTextEditor';
import { Posts } from 'types/posts/types';
import dayjs from 'dayjs';
import { IconMessage, IconThumbDown, IconThumbUp } from '@tabler/icons';
import { useState } from 'react';

const UserPostBox = ({ post }: { post: Posts }) => {
	const [liked, setLiked] = useState<boolean | null>(null);
	const { id, title, message, created_at, Author } = post;

	const handleLikedChange = (type: 'liked' | 'disliked') => {
		if ((liked === null && type === 'liked') || (liked === false && type === 'liked')) {
			setLiked(true);
			handleLikePost('liked');
		} else if ((liked === null && type === 'disliked') || (liked === true && type === 'disliked')) {
			setLiked(false);
			handleLikePost('disliked');
		} else if ((liked === true && type === 'liked') || (liked === false && type === 'disliked')) {
			setLiked(null);
			handleLikePost('remove');
		}
	};

	const handleLikePost = (type: 'liked' | 'disliked' | 'remove') => {
		// console.log(id, type);
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
				<RichTextEditor value={message as string} readOnly onChange={() => null} />
				<Space p='md' />
				<Group spacing={'sm'}>
					<Button
						leftIcon={<IconThumbUp />}
						variant={liked === true ? 'filled' : 'outline'}
						onClick={() => handleLikedChange('liked')}
					>
						Like
					</Button>
					<Button
						leftIcon={<IconThumbDown />}
						variant={liked === false ? 'filled' : 'outline'}
						onClick={() => handleLikedChange('disliked')}
					>
						Dislike
					</Button>
					<Button leftIcon={<IconMessage />} variant='outline'>
						Comment
					</Button>
				</Group>
			</Card>
			<Space p='md' />
		</Container>
	);
};

export default UserPostBox;
