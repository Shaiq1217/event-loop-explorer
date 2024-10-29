import { useState } from 'react';
import * as Styled from './WelcomeModal.styled.ts';
import { Modal } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CODE_BLOCK } from '../../utils/constants.ts';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTutorial } from '../../providers/TutorialProvider.tsx';

const WelcomeModal = () => {
	const { openTutorial } = useTutorial();
	const [isOpen, setIsOpen] = useState(true);

	const runTutorial = () => {
		setIsOpen(false);
		openTutorial();
	};
	return (
		<Modal
			open={isOpen}
			onClose={() => setIsOpen(false)}
			sx={{
				'&.MuiModal-root': {
					lineHeight: 1.5,
					backdropFilter: 'blur(5px)',
					backgroundColor: 'rgba(0, 0, 0, 0.2)',
				},
			}}
		>
			<Styled.WelcomeModal>
				<Styled.ModalHeader>
					<h1>Welcome to Event Loop Explorer! 🎊</h1>
					<Styled.CloseIcon onClick={() => setIsOpen(false)} />
				</Styled.ModalHeader>
				<p>
					Explore the event loop in JavaScript and learn how the browser
					executes your code. This tool will help you understand the order of
					execution of different types of tasks in the event loop. The major
					tasks include:
					<ul
						style={{
							paddingLeft: '20px',
							marginInline: '1rem',
							listStyleType: 'disc',
							fontWeight: 'bold',
							lineHeight: '1',
						}}
					>
						<li>Microtask Queue</li>
						<li>Event Loop</li>
						<li>Web API</li>
						<li>Callback Queue</li>
						<li>Request Animations</li>
						<li>CallStack</li>
					</ul>
				</p>
				<h2>How to use?</h2>
				<p>
					You can add code snippets to the editor and click on "Run" them to see
					how they are executed under the hood. Code snippets like the one below
					are already added in the editor. You can run them to see the order of
					execution.:
				</p>
				<SyntaxHighlighter
					customStyle={{ margin: '1.5rem' }}
					language="javascript"
					style={coldarkDark}
				>
					{CODE_BLOCK}
				</SyntaxHighlighter>
				<p>
					You can also add callbacks to the Web API, requestAnimationFrame, and
					see how they are executed in the event loop.
				</p>
				<p>
					Click on "Get Started" to start exploring the event loop or "Skip" to
					skip the introduction.
				</p>
				<Styled.ModalFooter>
					<Styled.ModalButton
						onClick={() => setIsOpen(false)}
						variant="text"
						style={{ color: 'white' }}
					>
						Skip
					</Styled.ModalButton>
					<Styled.ModalButton onClick={runTutorial} variant="contained">
						Get Started
						<KeyboardArrowRightIcon />
					</Styled.ModalButton>
				</Styled.ModalFooter>
			</Styled.WelcomeModal>
		</Modal>
	);
};

export default WelcomeModal;
