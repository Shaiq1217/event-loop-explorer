import Joyride from 'react-joyride';
import { useTheme } from '@emotion/react';
import { STEPS } from '../../utils/steps';
import { useTutorial } from '../../providers/TutorialProvider';

const Tour = () => {
	const { isTutorialOpen } = useTutorial();
	const theme = useTheme();
	return (
		<Joyride
			steps={STEPS}
			continuous
			showProgress
			showSkipButton
			run={isTutorialOpen}
			styles={{
				buttonNext: {
					backgroundColor: theme.custom.colors.tooltip.button.background,
					color: 'white',
				},
				options: {
					primaryColor: 'white',
					overlayColor: 'rgba(0, 0, 0, 0.4)',
				},
			}}
		/>
	);
};

export default Tour;
