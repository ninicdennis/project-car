import { Avatar, Button, Card, Container, Group, Space, Text, Title } from '@mantine/core';
import RichTextEditor from '@components/RichTextEditor';
import { Posts } from 'types/posts/types';
import dayjs from 'dayjs';

const userPostBox = ({ post }: { post: Posts }) => {
	const { title, message, created_at, Author } = post;
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
					<Button variant='outline'>Like</Button>
					<Button variant='outline'>Dislike</Button>
					<Button variant='outline'>Comment</Button>
				</Group>
			</Card>
			<Space p='md' />
		</Container>
	);
};

export default userPostBox;
