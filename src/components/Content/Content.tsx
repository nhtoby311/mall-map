import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Content() {
	return (
		<Container>
			<Hero>
				<Header />
				<Footer />
			</Hero>
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
