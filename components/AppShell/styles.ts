import { createStyles } from '@mantine/core';

export const useStyles = createStyles({
	centerFlexHeight: { display: 'flex', alignItems: 'center', height: '100%' },
	flexSpaceBetween: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' },
	flexEnd: { display: 'flex', alignItems: 'flex-end', justifyContent: 'center', height: '100%' },
	cursorPointer: { cursor: 'pointer' },
});
