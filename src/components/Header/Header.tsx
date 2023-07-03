import styled from 'styled-components';

export default function Header() {
	return (
		<Container>
			<h1>Header</h1>
			<h1>Color</h1>
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
