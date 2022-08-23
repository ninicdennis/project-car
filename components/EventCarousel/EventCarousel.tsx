import { Carousel } from '@mantine/carousel';
import { Card, Image, Text, Title, Stack } from '@mantine/core';

const EventCarousel = () => {
	return (
		<Stack>
			<Title>Events</Title>
			<Carousel
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
	);
};

export default EventCarousel;
