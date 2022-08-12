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
	Container,
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
		<Container>
			<Title style={{ marginBottom: 4 }} order={2}>
				Profile Settings
			</Title>
			<Divider style={{ marginBottom: 4 }} />
			<div style={{ position: 'relative' }}>
				<LoadingOverlay visible={visible} overlayBlur={2} />
				<Grid align='center'>
					<Grid.Col>
						<Title style={{ marginBottom: 4 }} order={3}>
							Avatar
						</Title>
						<div style={{ maxWidth: 250, maxHeight: 250, marginLeft: 'auto', marginRight: 'auto' }}>
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
					<Grid.Col>
						{!editImage && (
							<Button variant='outline' onClick={() => setEditImage(true)}>
								Edit
							</Button>
						)}
						{editImage && (
							<Group>
								<Button variant='outline' onClick={() => setEditImage(false)}>
									Save
								</Button>
								<Button color='gray' onClick={() => setEditImage(false)}>
									Cancel
								</Button>
							</Group>
						)}
					</Grid.Col>

					<form onSubmit={form.onSubmit((v) => console.log(v))}>
						<Divider style={{ marginTop: 8, marginBottom: 8 }} />
						<Title style={{ marginBottom: 4 }} order={3}>
							Profile Information
						</Title>
						<Grid justify='center' align='center'>
							<Grid.Col sm={12} lg={6}>
								<TextInput disabled label='Username' {...form.getInputProps('username')} />
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
								<Button variant='outline' type='submit'>
									Save
								</Button>
							</Grid.Col>
						</Grid>
					</form>
				</Grid>
			</div>
		</Container>
	);
};

export default ProfilePage;
