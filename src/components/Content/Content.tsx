import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Details from '../Details/Details';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Content() {
	const [detailsOpen, setDetailsOpen] = useState(true);

	const toggleDetails = () => {
		setDetailsOpen(!detailsOpen);
	};

	return (
		<Container>
			<Hero>
				<Header />
				<Footer />
			</Hero>
			<AnimatePresence mode='wait'>
				{detailsOpen && <Details exitCallBack={toggleDetails} />}
			</AnimatePresence>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 95%;
	max-width: 1920px;
	min-height: 100%;
`;

const Hero = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100vh;
`;
