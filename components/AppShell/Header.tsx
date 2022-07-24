import { Header, MediaQuery, Burger, useMantineTheme, Title, Text } from '@mantine/core';
import { HeaderProps } from './types';
import { useUserState } from '../../stores/Authentication';
import Router from 'next/router';
import { useStyles } from './styles';

const HeaderComponent = ({ opened, setOpened }: HeaderProps) => {
	const { classes } = useStyles();
	const theme = useMantineTheme();
	const [{ user, session: userSession }] = useUserState();

	return (
		<Header height={70} p='md'>
			<div className={classes.centerFlexHeight}>
				<MediaQuery largerThan='sm' styles={{ display: 'none' }}>
					<Burger
						opened={opened}
						onClick={() => setOpened((o) => !o)}
						size='sm'
						color={theme.colors.gray[6]}
						mr='xl'
					/>
				</MediaQuery>
				<div className={classes.flexSpaceBetween}>
					<Title onClick={() => Router.push('/')} order={2} className={classes.cursorPointer}>
						Project: Car
					</Title>
					{userSession && <Text>Hello {user.username}</Text>}
				</div>
			</div>
		</Header>
	);
};

export default HeaderComponent;
