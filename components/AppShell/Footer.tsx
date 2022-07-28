import { Footer, Text } from '@mantine/core';
import { IconBrandDiscord, IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from '@tabler/icons';
import { useStyles } from './styles';

const FooterComponent = () => {
	const { classes } = useStyles();

	return (
		<Footer height={60} p='md'>
			<div className={classes.flexSpaceBetween}>
				<div>
					<IconBrandFacebook />
					<IconBrandTwitter />
					<IconBrandDiscord />
					<IconBrandGithub />
				</div>
				<div>
					<Text size='xs' align='center'>
						Made by Doggobot
					</Text>
					<Text size='xs' align='center'>
						using Next.js and Supabase
					</Text>
				</div>
				<div></div>
			</div>
		</Footer>
	);
};

export default FooterComponent;
