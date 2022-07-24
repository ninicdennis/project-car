import { Card, Center, PasswordInput, Title, TextInput, Button, Grid, Group, Loader } from '@mantine/core';
import Link from 'next/link';
import { useForm } from '@mantine/form';
import Router from 'next/router';
import { useUserState } from '../../queryHooks/Authentication';
import { showNotification } from '@mantine/notifications';

const RegisterPage = () => {
	const form = useForm({
		initialValues: {
			email: '',
			password: '',
			username: '',
		},

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
			username: (value) => (value.length > 5 ? null : 'Invalid username'),
			password: (value) => (value.length > 6 ? null : 'Invalid password'),
		},
	});
	const [{ session: userSession }, actions] = useUserState();

	if (userSession) {
		Router.push('/home');
	}

	const register = () => {
		actions.register(form.values).then(() =>
			showNotification({
				title: 'Logged in!',
				message: 'Welcome!',
				autoClose: 3000,
				color: 'green',
			})
		);
	};

	return (
		<Center>
			<Card shadow='sm' p='lg'>
				<Title>Register</Title>
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
							<Group>
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
			</Card>
		</Center>
	);
};
export default RegisterPage;
