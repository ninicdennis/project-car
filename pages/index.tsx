import { InitialState } from '@stores/types';
import { Button, Card, Center, Grid, Group, Image, Space, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import EventCarousel from '@components/EventCarousel';
import Link from 'next/link';
import { TAGLINE_CARD, TaglineData } from 'constants/index';
const Homepage = ({ session }: InitialState) => {
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
							{!session ? (
								<>
									<Link href='/login' passHref>
										<Button component='a'>Login</Button>
									</Link>
									<Link href='/signup' passHref>
										<Button component='a' variant='outline'>
											Sign up
										</Button>
									</Link>
								</>
							) : (
								<Link href='/home' passHref>
									<Button component='a' variant='outline'>
										Home
									</Button>
								</Link>
							)}
						</Group>
					</Grid.Col>
					<Grid.Col xs={12} md={6} lg={4} style={{ width: 240 }}>
						<Image src='/media/logo.png' alt='Random unsplash image' />
					</Grid.Col>
				</Grid>
			</div>
			<Space h='xl' />
			<Grid gutter='xl'>
				{TAGLINE_CARD.map(({ icon, title, subtext, href, buttonSubtext }: TaglineData) => (
					<Grid.Col xs={12} lg={4} key={title}>
						<Card shadow='sm' radius='sm' withBorder>
							{icon(getColor)}
							<Title order={2}>{title}</Title>
							<Text>{subtext}</Text>
							<Space h='xl' />
							<Link href={href} passHref>
								<Button component='a' variant='outline'>
									{buttonSubtext}
								</Button>
							</Link>
						</Card>
					</Grid.Col>
				))}
			</Grid>
			<Space h='xl' />
			<EventCarousel />
		</div>
	);
};

export default Homepage;
