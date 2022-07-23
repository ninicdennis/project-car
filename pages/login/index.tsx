import { Card, Center, PasswordInput, Title, TextInput, Button, Grid, Group, Loader } from '@mantine/core';
import Link from 'next/link';
import { useForm } from '@mantine/form';
import { useLoginUser, useGetUserSession } from '../../queryHooks/Authentication';
import Router from 'next/router';

const LoginPage = () => {
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
	const loginUserHook = useLoginUser();
	const { isLoading, data: userSession } = useGetUserSession();

	const loginUser = () => {
		loginUserHook.mutate(form.values);
	};

	if (isLoading) {
		return <Loader />;
	}
	if (userSession) {
		Router.push('/home');
	}

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
