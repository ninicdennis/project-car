import { Title, TextInput, LoadingOverlay, Grid, Button, Image, Group, Divider, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import ImageDropzone from '@components/dropImage';
import { InitialState } from '@stores/types';
import useStyles from '@styles/profile';

const ProfilePage = ({ session }: InitialState) => {
	const { classes } = useStyles();
	// const [visible, setVisible] = useState(false); // ? used for when setVisible is needed
	const visible = false;
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
		<Container size='xl'>
			<Title className={classes.marginBot} order={2}>
				Profile Settings
			</Title>
			<Divider className={classes.marginBot} />
			<div style={{ position: 'relative' }}>
				<LoadingOverlay visible={visible} overlayBlur={2} />
				<Grid align='center'>
					<Grid.Col>
						<Title className={classes.marginBot} order={3}>
							Avatar
						</Title>
						<div className={classes.imageSizing}>
							{!editImage ? (
								<Image radius='md' src='/media/logo.png' alt='Random unsplash image' />
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
					<Grid.Col>
						<form onSubmit={form.onSubmit((v) => v)}>
							<Divider className={classes.marginTopBot} />
							<Title className={classes.marginBot} order={3}>
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
					</Grid.Col>
				</Grid>
			</div>
		</Container>
	);
};

export default ProfilePage;
