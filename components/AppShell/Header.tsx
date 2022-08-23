import { Header, MediaQuery, Burger, useMantineTheme, Image, Avatar, Menu, Text, Indicator } from '@mantine/core';
import { HeaderProps } from './types';
import { useUserState } from '@stores/Authentication';
import Router from 'next/router';
import { useStyles } from './styles';
import { IconAlertCircle, IconCalendarEvent } from '@tabler/icons';

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
							<Menu position='bottom-end' withArrow withinPortal>
								<Menu.Target>
									<Indicator color='yellow'>
										<Avatar radius='sm' size='lg' src={null} className={classes.cursorPointer} />
									</Indicator>
								</Menu.Target>
								<Menu.Dropdown>
									<Menu.Item>
										<div className={classes.notificationSplit}>
											<div className={classes.iconBox}>
												<Avatar radius='sm' size='lg' src={null} />
											</div>
											<Text style={{ flex: 10 }}>@username has followed you!</Text>
										</div>
									</Menu.Item>
									<Menu.Item>
										<div className={classes.notificationSplit}>
											<div className={classes.iconBox}>
												<Avatar radius='sm' size='lg' src={null} />
											</div>
											<Text style={{ flex: 10 }}>@username liked your post! Longer text for alignment!</Text>
										</div>
									</Menu.Item>
									<Menu.Item>
										<div className={classes.notificationSplit}>
											<div className={classes.iconBox}>
												<Avatar radius='sm' size='lg' src={null} />
											</div>
											<Text style={{ flex: 10 }}>@username commented on your post!</Text>
										</div>
									</Menu.Item>
									<Menu.Item>
										<div className={classes.notificationSplit}>
											<div className={classes.iconBox}>
												<IconCalendarEvent width={48} height={48} color='orange' />
											</div>
											<Text style={{ flex: 10 }}>@event is happening soon!</Text>
										</div>
									</Menu.Item>
									<Menu.Item>
										<div className={classes.notificationSplit}>
											<div className={classes.iconBox}>
												<IconAlertCircle width={48} height={48} color='red' />
											</div>
											<Text style={{ flex: 10 }}>Something happening, not sure what though!</Text>
										</div>
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
