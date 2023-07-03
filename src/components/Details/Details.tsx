import styled from 'styled-components';
import ExitSVG from '../SVG/ExitSVG';
import DetailsContent from './DetailsContent/DetailsContent';
import { motion } from 'framer-motion';

export default function Details({ exitCallBack }: any) {
	return (
		<Wrapper
			initial={{ y: '120%' }}
			animate={{ y: 0 }}
			exit={{ y: '120%' }}
			transition={{ ease: 'easeInOut' }}>
			<StyledExitSVG onClickCB={exitCallBack} />
			<FadedBackground />
			<Container>
				<ContentContainer>
					<DetailsContent />
				</ContentContainer>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled(motion.section)`
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 500px;
	background: #fffefa;
	pointer-events: auto;
	border-top-left-radius: 10px;
`;

const Container = styled.div`
	display: flex;
	overflow: auto;
	height: 100%;
	width: 100%;
	padding: 20px 30px;
`;

const ContentContainer = styled.div`
	display: flex;
	gap: 40px;
	/* background: red; */
`;

const StyledExitSVG = styled(ExitSVG)`
	position: absolute;
	top: -60px;
	right: 20px;
	cursor: pointer;
	> .cross-svg {
		transform-origin: 50% 45%;
		transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
	&:hover > .cross-svg {
		transform: rotate(90deg);
	}
`;

const FadedBackground = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 20%;
	height: 100%;
	background: linear-gradient(
		to left,
		#fffefa 20%,
		rgba(255, 254, 250, 0) 100%
	);
	/* background: red; */
`;
