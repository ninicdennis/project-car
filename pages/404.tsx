import Head from 'next/head';
import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
	root: {
		paddingTop: 80,
		paddingBottom: 80,
	},

	label: {
		textAlign: 'center',
		fontWeight: 900,
		fontSize: 220,
		lineHeight: 1,
		marginBottom: theme.spacing.xl * 1.5,
		color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

		[theme.fn.smallerThan('sm')]: {
			fontSize: 120,
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		textAlign: 'center',
		fontWeight: 900,
		fontSize: 38,

		[theme.fn.smallerThan('sm')]: {
			fontSize: 32,
		},
	},

	description: {
		maxWidth: 500,
		margin: 'auto',
		marginTop: theme.spacing.xl,
		marginBottom: theme.spacing.xl * 1.5,
	},
}));

export default function App() {
	const { classes } = useStyles();
	return (
		<>
			<Head>
				<title>Project: Car</title>
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
			</Head>
			<Container className={classes.root}>
				<div className={classes.label}>404</div>
				<Title className={classes.title}>You have found a secret place.</Title>
				<Text color='dimmed' size='lg' align='center' className={classes.description}>
					Unfortunately, this is only a 404 page. This page may not exist. No fret, lets get you back home!
				</Text>
				<Group position='center'>
					<Link href='/' passHref>
						<Button component='a' variant='subtle' size='md'>
							Take me home!
						</Button>
					</Link>
				</Group>
			</Container>
		</>
	);
}
