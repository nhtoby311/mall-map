import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Details from '../Details/Details';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useStores from '../../store/store';

export default function Content() {
	const { currentStore, setCurrentStore } = useStores();

	return (
		<Container>
			<Hero>
				<Header />
				<Footer />
			</Hero>
			<AnimatePresence mode='wait'>
				{currentStore && (
					<Details exitCallBack={() => setCurrentStore(null)} />
				)}
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
