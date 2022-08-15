import { Header, MediaQuery, Burger, useMantineTheme, Image, Avatar, Menu, Text, Indicator } from '@mantine/core';
import { HeaderProps } from './types';
import { useUserState } from '@stores/Authentication';
import Router from 'next/router';
import { useStyles } from './styles';

const HeaderComponent = ({ opened, setOpened }: HeaderProps) => {
	const { classes } = useStyles();
	const theme = useMantineTheme();
	const [{ session: userSession }] = useUserState();

	return (
		<Header height={100} p='md'>
			<div className={classes.centerFlexHeight}>
				<div className={classes.flexSpaceBetween}>
					<MediaQuery largerThan='sm' styles={{ display: 'none' }}>
						<Burger opened={opened} onClick={() => setOpened((o) => !o)} size='md' color={theme.colors.gray[6]} />
					</MediaQuery>
					<div className={classes.headerFlex}>
						<Image
							src='/media/logo.png'
							width={256 / 2}
							height={149 / 2}
							onClick={() => Router.push('/')}
							className={classes.cursorPointer}
						/>
					</div>

					{userSession && (
						<div className={classes.flexCenter}>
							<Menu position='bottom-end' withArrow>
								<Menu.Target>
									<Indicator color='yellow'>
										<Avatar radius='sm' size='lg' src={null} className={classes.cursorPointer} />
									</Indicator>
								</Menu.Target>
								<Menu.Dropdown>
									<Menu.Item>
										<Text>Notifications go here !</Text>
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						</div>
					)}
				</div>
			</div>
		</Header>
	);
};

export default HeaderComponent;
