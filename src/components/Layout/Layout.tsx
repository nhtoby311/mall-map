import styled from 'styled-components';

export default function Layout({ children }: any) {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	pointer-events: none;
	font-family: 'Space Grotesk', sans-serif;
`;
