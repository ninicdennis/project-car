import { showNotification } from '@mantine/notifications';

const defaultConfig = {
	autoClose: 3000,
};

interface Trigger {
	title: string;
	message: string;
	type: 'error' | 'warning' | 'info' | 'success';
}

export const notificationTrigger = ({ title, message, type }: Trigger) => {
	const typeColor = (typeValue: string) => {
		switch (typeValue) {
			case 'error':
				return 'red';
			case 'warning':
				return 'yellow';
			case 'info':
				return 'blue';
			case 'success':
				return 'green';
			default:
				return 'blue';
		}
	};
	return showNotification({
		...defaultConfig,
		title,
		message,
		color: typeColor(type),
	});
};
