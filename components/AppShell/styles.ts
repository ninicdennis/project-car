import { createStyles } from '@mantine/core';

export const useStyles = createStyles({
	centerFlexHeight: { display: 'flex', alignItems: 'center', height: '100%' },
	flexSpaceBetween: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' },
	flexEnd: { display: 'flex', alignItems: 'flex-end', justifyContent: 'center', height: '100%', paddingTop: 8 },
	cursorPointer: { cursor: 'pointer' },
	headerFlex: { justifyContent: 'center', display: 'flex', marginLeft: 'auto', marginRight: 'auto' },
	flexCenter: { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' },
});
