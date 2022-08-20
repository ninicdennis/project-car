import { Button, Card, Collapse, Container, Group, Space, TextInput, Title } from '@mantine/core';
import { useState } from 'react';
import RichTextEditor from '@components/RichTextEditor';
import { CONTROLS } from '@components/RichTextEditor/constants';
import { callPost } from '@utils/requests';
import { notificationTrigger } from '@utils/notification';
import { useForm } from '@mantine/form';
const CreatePostComponent = ({ user_id }: { user_id: string }) => {
	const [createPost, setCreatePost] = useState(false);

	const createPostReq = async ({ title, message }: { title: string; message: string }) => {
		try {
			await callPost({ url: '/api/posts', body: { title, body: message, user_id } }).then(() => {
				notificationTrigger({ title: 'Success!', message: 'Sucessfully Posted!', type: 'success' });
				setCreatePost(false);
				form.reset();
			});
		} catch (e) {
			notificationTrigger({ title: 'Error!', message: 'Something went wrong, please try again!', type: 'error' });
		}
	};

	const form = useForm({
		initialValues: {
			title: '',
			message: '',
		},
		validate: {
			title: (value) => (value.length > 5 ? null : 'Too short of a title!'),
		},
	});

	return (
		<Container size='md'>
			<Card>
				<form onSubmit={form.onSubmit((values) => createPostReq(values))}>
					<Group style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Title order={2}>{createPost ? 'New' : 'Create a'} post</Title>
						<Button variant={createPost ? 'outline' : 'filled'} onClick={() => setCreatePost(!createPost)}>
							{createPost ? 'Cancel' : 'Create'}
						</Button>
					</Group>
					<Collapse in={createPost}>
						<TextInput placeholder='Title' label='Title' {...form.getInputProps('title')} />
						<Space h='md' />
						<RichTextEditor
							value={form.values.message}
							onChange={(e) => form.setFieldValue('message', e)}
							controls={CONTROLS}
						/>
						<Space h='md' />
						<Button type='submit'>Post</Button>
					</Collapse>
				</form>
			</Card>
		</Container>
	);
};

export default CreatePostComponent;