import { Card, Center, PasswordInput, Title, TextInput, Button, Grid, Group, LoadingOverlay } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useUserState } from '@stores/Authentication';
import Router from 'next/router';
import { InitialState } from '@stores/types';
import { useState } from 'react';

const LoginPage = ({ session }: InitialState) => {
	const [, actions] = useUserState();
	const [visible, setVisible] = useState(false);

	if (session) {
		Router.push('/home');
	}

	const form = useForm({
		initialValues: {
			email: '',
			password: '',
		},

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
			password: (value) => (value.length > 6 ? null : 'Password too short'),
		},
	});

	const loginUser = () => {
		setVisible(true);
		actions.login(form.values).then(() => setVisible(false));
	};

	return (
		<Center data-testid='login-main' style={{ height: '100%' }}>
			<Card shadow='sm' p='lg'>
				<Title sx={{ marginBottom: 8 }}>Login</Title>
				<div style={{ maxWidth: 400, position: 'relative' }}>
					<LoadingOverlay visible={visible} overlayBlur={2} />
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
								<Group position='center'>
									<Button type='submit'>Login</Button>
									<Button variant='outline'>Forgot Password</Button>
								</Group>
							</Grid.Col>
						</Grid>
					</form>
				</div>
			</Card>
		</Center>
	);
};
export default LoginPage;
