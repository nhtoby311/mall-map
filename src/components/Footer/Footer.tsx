import styled from 'styled-components';

export default function Footer() {
	return (
		<Container>
			<h1></h1>
			<Disclaimer>
				created by <a href='https://nhtoby.com'>@nhtoby</a>
			</Disclaimer>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 30px 0;
`;

const Disclaimer = styled.p`
	color: #333;
	font-size: 16px;
	a {
		color: #333;
		font-weight: 700;
		pointer-events: all;
	}
`;
