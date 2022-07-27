import { Card, Center, PasswordInput, Title, TextInput, Button, Grid, Group } from '@mantine/core';
import Link from 'next/link';
import { useForm } from '@mantine/form';
import { useUserState } from '../../stores/Authentication';
import Router from 'next/router';
import { showNotification } from '@mantine/notifications';
import { InitialState } from '../../stores/types';

const LoginPage = ({ user, session }: InitialState) => {
	const [, actions] = useUserState();

	if (session) {
		Router.push('/home');
	}

	const form = useForm({
		initialValues: {
			email: 'test@email.com',
			password: 'tester123',
		},

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
			password: (value) => (value.length > 6 ? null : 'Password too short'),
		},
	});

	const loginUser = () => {
		actions
			.login(form.values)
			.then(() =>
				showNotification({
					title: 'Logged in!',
					message: 'Welcome back!',
					autoClose: 3000,
					color: 'green',
				})
			)
			.catch((err) => {
				showNotification({
					title: 'Error!',
					message: err.message,
					autoClose: 3000,
					color: 'red',
				});
			});
	};

	return (
		<Center>
			<Card shadow='sm' p='lg'>
				<Title>Login</Title>
				<form onSubmit={form.onSubmit(loginUser)}>
					<Grid justify='center' align='center'>
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
							<Group>
								<Button type='submit'>Login</Button>
								<Button variant='outline'>Forgot Password</Button>
								<Link href='/signup' passHref>
									<Button component='a' variant='outline'>
										Register
									</Button>
								</Link>
							</Group>
						</Grid.Col>
					</Grid>
				</form>
			</Card>
		</Center>
	);
};
export default LoginPage;
