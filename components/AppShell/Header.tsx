import { Header, MediaQuery, Burger, useMantineTheme, Image, Avatar } from '@mantine/core';
import { HeaderProps } from './types';
import { useUserState } from '@stores/Authentication';
import Router from 'next/router';
import { useStyles } from './styles';

const HeaderComponent = ({ opened, setOpened }: HeaderProps) => {
	const { classes } = useStyles();
	const theme = useMantineTheme();
	const [{ user, session: userSession }] = useUserState();

	return (
		<Header height={100} p='md'>
			<div className={classes.centerFlexHeight}>
				<MediaQuery largerThan='sm' styles={{ display: 'none' }}>
					<Burger opened={opened} onClick={() => setOpened((o) => !o)} size='md' color={theme.colors.gray[6]} />
				</MediaQuery>
				<div className={classes.flexSpaceBetween}>
					<div style={{ flex: 10, justifyContent: 'center', display: 'flex' }}>
						<Image
							src='/media/logo.png'
							width={256 / 2}
							height={149 / 2}
							onClick={() => Router.push('/')}
							className={classes.cursorPointer}
						/>
					</div>

					{userSession && <Avatar radius='sm' size='lg' src={null} />}
				</div>
			</div>
		</Header>
	);
};

export default HeaderComponent;
