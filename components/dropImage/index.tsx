import { Group, Text, useMantineTheme } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';

const ImageDropzone = (props: Partial<DropzoneProps>) => {
	const theme = useMantineTheme();
	return (
		<Dropzone onDrop={(files) => files} maxSize={3 * 1024 ** 2} accept={IMAGE_MIME_TYPE} {...props}>
			<Group position='center' spacing='xl' style={{ minHeight: 150, pointerEvents: 'none' }}>
				<Dropzone.Accept>
					<IconUpload
						size={50}
						stroke={1.5}
						color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
					/>
				</Dropzone.Accept>
				<Dropzone.Reject>
					<IconX size={50} stroke={1.5} color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]} />
				</Dropzone.Reject>
				<Dropzone.Idle>
					<IconPhoto size={50} stroke={1.5} />
				</Dropzone.Idle>

				<div>
					<Text size='xl' inline>
						Drag images here
					</Text>
					<Text size='sm' color='dimmed' inline mt={7}>
						File should not exceed 5mb
					</Text>
				</div>
			</Group>
		</Dropzone>
	);
};

export default ImageDropzone;
