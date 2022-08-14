import { Card, Center, PasswordInput, Title, TextInput, Button, Grid, Group, LoadingOverlay } from '@mantine/core';
import Link from 'next/link';
import { useForm } from '@mantine/form';
import Router from 'next/router';
import { useUserState } from '@stores/Authentication';
import { InitialState } from '@stores/types';
import { useState } from 'react';
import { notificationTrigger } from '@utils/notification';
import { UseFormReturnType } from '@mantine/form/lib/types';
import { RegisterFormValues } from 'types/signup/types';

const RegisterPage = ({ session }: InitialState) => {
	const [, actions] = useUserState();
	const [visible, setVisible] = useState(false);

	if (session) {
		Router.push('/home');
	}

	const form: UseFormReturnType<RegisterFormValues> = useForm<RegisterFormValues>({
		initialValues: {
			email: '',
			password: '',
			username: '',
			secondaryPassword: '',
		},

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
			username: (value) => (value.length > 5 ? null : 'Invalid username'),
			password: (value) => (value.length > 6 ? null : 'Invalid password'),
			secondaryPassword: (value) => (form.values.password === value ? null : 'Passwords do not match!'),
		},
	});

	const register = () => {
		setVisible(true);
		actions
			.register(form.values)
			.then(() => {
				notificationTrigger({
					title: 'Logged in!',
					message: 'Welcome!',
					type: 'success',
				});
				setVisible(false);
			})
			.catch((err) => {
				notificationTrigger({
					title: 'Error!',
					message: err.message,
					type: 'error',
				});
				setVisible(false);
			});
	};

	return (
		<Center>
			<Card shadow='sm' p='lg'>
				<Title sx={{ marginBottom: 8 }}>Register</Title>
				<div style={{ maxWidth: 400, position: 'relative' }}>
					<LoadingOverlay visible={visible} overlayBlur={2} />
					<form onSubmit={form.onSubmit(register)}>
						<Grid justify='center' align='center'>
							<Grid.Col>
								<TextInput label='Username' required {...form.getInputProps('username')} />
							</Grid.Col>
							<Grid.Col>
								<TextInput label='Email' required {...form.getInputProps('email')} />
							</Grid.Col>
							<Grid.Col>
								<PasswordInput
									placeholder='Password'
									label='Password'
									required
									{...form.getInputProps('password')}
								/>
							</Grid.Col>
							<Grid.Col>
								<PasswordInput
									placeholder='Password'
									label='Confirm Password'
									required
									{...form.getInputProps('secondaryPassword')}
								/>
							</Grid.Col>
							<Grid.Col>
								<Group position='center'>
									<Button type='submit'>Register</Button>
									<Link href='/login' passHref>
										<Button component='a' variant='outline'>
											Login instead
										</Button>
									</Link>
								</Group>
							</Grid.Col>
						</Grid>
					</form>
				</div>
			</Card>
		</Center>
	);
};
export default RegisterPage;
