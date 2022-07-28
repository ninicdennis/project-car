import {
	Center,
	Title,
	Card,
	TextInput,
	LoadingOverlay,
	Grid,
	Button,
	Image,
	Text,
	Group,
	Divider,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import ImageDropzone from '../../../components/dropImage';
import { InitialState } from '../../../stores/types';

const ProfilePage = ({ user, session }: InitialState) => {
	const [visible, setVisible] = useState(false);
	const [editImage, setEditImage] = useState(false);
	const form = useForm({
		initialValues: {
			username: 'tester123',
			email: 'test@email.com',
			fName: '',
			lName: '',
		},

		validate: {
			username: (value) => (value.length > 6 ? null : 'Invalid username'),
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
		},
	});

	useEffect(() => {
		if (!session) Router.push('/');
	}, [session]);

	return (
		<Center>
			<Card shadow='sm' p='lg'>
				<Title style={{ marginBottom: 4 }}>Profile Settings</Title>
				<LoadingOverlay visible={visible} overlayBlur={2} />
				<Divider style={{ marginBottom: 4 }} />
				<div style={{ maxWidth: 400, position: 'relative' }}>
					<Grid align='center'>
						<Grid.Col>
							<Text align='center'>Avatar</Text>
							<div style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }}>
								{!editImage ? (
									<Image
										radius='md'
										src='https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
										alt='Random unsplash image'
									/>
								) : (
									<ImageDropzone />
								)}
							</div>
						</Grid.Col>
						{!editImage && <Button onClick={() => setEditImage(true)}>Edit</Button>}
						{editImage && (
							<Group>
								<Button onClick={() => setEditImage(false)}>Save</Button>
								<Button color='gray' onClick={() => setEditImage(false)}>
									Cancel
								</Button>
							</Group>
						)}
						<form onSubmit={form.onSubmit((v) => console.log(v))}>
							<Divider style={{ marginTop: 8, marginBottom: 8 }} />
							<Grid justify='center' align='center'>
								<Grid.Col sm={12} lg={6}>
									<TextInput label='Username' {...form.getInputProps('username')} />
								</Grid.Col>
								<Grid.Col sm={12} lg={6}>
									<TextInput label='Email' {...form.getInputProps('email')} />
								</Grid.Col>
								<Grid.Col sm={12} lg={6}>
									<TextInput label='First Name' {...form.getInputProps('fName')} />
								</Grid.Col>
								<Grid.Col sm={12} lg={6}>
									<TextInput label='Last Name' {...form.getInputProps('lName')} />
								</Grid.Col>
								<Grid.Col>
									<Button type='submit'>Save</Button>
								</Grid.Col>
							</Grid>
						</form>
					</Grid>
				</div>
			</Card>
		</Center>
	);
};

export default ProfilePage;
