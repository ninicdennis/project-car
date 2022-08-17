// import { InitialState } from '@stores/types';

import { Carousel } from '@mantine/carousel';
import { Button, Card, Center, Grid, Group, Image, Space, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { IconCalendarEvent, IconShoppingCartPlus, IconUserCircle } from '@tabler/icons';
// { user, session: userSession }: InitialState
const Homepage = () => {
	const theme = useMantineTheme();
	const getColor = (color: string) => theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

	return (
		<div data-testid='homepage-main' style={{ paddingLeft: 24, paddingRight: 24 }}>
			<div style={{ margin: 24 }}>
				<Grid gutter='xl' justify={'space-evenly'} style={{ flexWrap: 'wrap-reverse', marginBottom: 48 }}>
					<Grid.Col xs={12} md={6} lg={5}>
						<Center style={{ height: '100%' }}>
							<Stack align={'center'}>
								<Title align='center'>The Cleanest Car Scene Social Media</Title>
								<Text>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nisl vulputate,
									dapibus augue nec, auctor enim. Etiam dictum interdum vulputate. Integer facilisis fringilla
									laoreet. Nulla et augue luctus, mattis lorem non, rhoncus lacus.
								</Text>
							</Stack>
						</Center>
						<Group>
							<Button>Login</Button>
							<Button variant={'outline'}>Sign Up</Button>
						</Group>
					</Grid.Col>
					<Grid.Col xs={12} md={6} lg={4} style={{ width: 240 }}>
						<Image src='/media/logo.png' alt='Random unsplash image' />
					</Grid.Col>
				</Grid>
			</div>
			<Space h='xl' />
			<Grid gutter='xl'>
				<Grid.Col xs={12} lg={4}>
					<Card shadow='sm' radius='sm' withBorder>
						<IconCalendarEvent width={60} height={60} color={getColor('orange')} />
						<Title order={2}>Events</Title>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nisl vulputate, dapibus
							augue nec, auctor enim. Etiam dictum interdum vulputate. Integer facilisis fringilla laoreet. Nulla
							et augue luctus, mattis lorem non, rhoncus lacus. Morbi ut euismod dui. Duis at consequat augue.
							Vestibulum id bibendum nisi.
						</Text>
						<Space h='xl' />
						<Button variant='outline'>See Events</Button>
					</Card>
				</Grid.Col>
				<Grid.Col xs={12} lg={4}>
					<Card shadow='sm' p='lg' radius='sm' withBorder>
						<IconUserCircle width={60} height={60} color={getColor('blue')} />
						<Title order={2}>Profiles</Title>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nisl vulputate, dapibus
							augue nec, auctor enim. Etiam dictum interdum vulputate. Integer facilisis fringilla laoreet. Nulla
							et augue luctus, mattis lorem non, rhoncus lacus. Morbi ut euismod dui. Duis at consequat augue.
							Vestibulum id bibendum nisi.
						</Text>
						<Space h='xl' />
						<Button variant='outline'>Setup Profile</Button>
					</Card>
				</Grid.Col>
				<Grid.Col xs={12} lg={4}>
					<Card shadow='sm' p='lg' radius='sm' withBorder>
						<IconShoppingCartPlus width={60} height={60} color={getColor('green')} />
						<Title order={2}>Marketplace</Title>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nisl vulputate, dapibus
							augue nec, auctor enim. Etiam dictum interdum vulputate. Integer facilisis fringilla laoreet. Nulla
							et augue luctus, mattis lorem non, rhoncus lacus. Morbi ut euismod dui. Duis at consequat augue.
							Vestibulum id bibendum nisi.
						</Text>
						<Space h='xl' />
						<Button variant='outline'>View Marketplace</Button>
					</Card>
				</Grid.Col>
			</Grid>
			<Stack>
				<Title>Events</Title>
				<Carousel
					withIndicators
					height={300}
					slideSize='33.333333%'
					slideGap='md'
					breakpoints={[
						{ maxWidth: 'md', slideSize: '50%' },
						{ maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
					]}
					loop
					align='start'
				>
					<Carousel.Slide size={300} gap={20}>
						<Card>
							<Text>Event </Text>
							<Card.Section>
								<Image
									src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
									height={150}
									alt='Norway'
									mt='sm'
								/>
							</Card.Section>
							<Text>Event Time</Text>
						</Card>
					</Carousel.Slide>
					<Carousel.Slide size={300} gap={20}>
						<Card>
							<Text>Event </Text>
							<Card.Section>
								<Image
									src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
									height={150}
									alt='Norway'
									mt='sm'
								/>
							</Card.Section>
							<Text>Event Time</Text>
						</Card>
					</Carousel.Slide>
					<Carousel.Slide size={300} gap={20}>
						<Card>
							<Text>Event </Text>
							<Card.Section>
								<Image
									src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
									height={150}
									alt='Norway'
									mt='sm'
								/>
							</Card.Section>
							<Text>Event Time</Text>
						</Card>
					</Carousel.Slide>
					<Carousel.Slide size={300} gap={20}>
						<Card>
							<Text>Event </Text>
							<Card.Section>
								<Image
									src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
									height={150}
									alt='Norway'
									mt='sm'
								/>
							</Card.Section>
							<Text>Event Time</Text>
						</Card>
					</Carousel.Slide>
					<Carousel.Slide size={300} gap={20}>
						<Card>
							<Text>Event </Text>
							<Card.Section>
								<Image
									src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
									height={150}
									alt='Norway'
									mt='sm'
								/>
							</Card.Section>
							<Text>Event Time</Text>
						</Card>
					</Carousel.Slide>
				</Carousel>
			</Stack>
		</div>
	);
};

export default Homepage;
