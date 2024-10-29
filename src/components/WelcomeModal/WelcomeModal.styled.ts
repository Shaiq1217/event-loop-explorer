import styled from '@emotion/styled';
import { Box, Button, css } from '@mui/material';
import InfoClosed from '../CloseIcon/InfoIcon';

export const CloseIcon = styled(InfoClosed)``;

export const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-center;
`;

export const WelcomeModal = styled(Box)(
	({ theme }) => css`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 700px;
		background: ${theme.custom.colors.wheel.background};
		padding-inline: 40px;
		padding-top: 20px;
		overflow-y: auto;
		max-height: 80vh;
	`
);

export const ModalFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;
	padding-block: 20px;
	border-top: 1px solid
		${({ theme }) => theme.custom.colors.wheel.task.disabled};
	background: ${({ theme }) => theme.custom.colors.wheel.background};
	gap: 2rem;
	position: sticky;
	bottom: 0;
	right: 0;
`;

export const ModalButton = styled(Button)`
	display: flex;
	gap: 2px;
	align-items: center;
	min-width: 100px;
	padding: 12px;
	text-transform: none;
`;
