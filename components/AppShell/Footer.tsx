import { Footer, Text, Center } from '@mantine/core';

const FooterComponent = () => {
	return (
		<Footer height={60} p='md'>
			<Center>
				<div>
					<Text size='xs' align='center'>
						Made by Doggobot
					</Text>
					<Text size='xs' align='center'>
						using Next.js and Supabase
					</Text>
				</div>
			</Center>
		</Footer>
	);
};

export default FooterComponent;
