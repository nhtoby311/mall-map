import styled from 'styled-components';

export default function Footer() {
	return (
		<Container>
			<h1>Footer</h1>
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
