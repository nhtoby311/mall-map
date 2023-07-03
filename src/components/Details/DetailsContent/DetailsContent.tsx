import styled from 'styled-components';
import image from '../../../assets/images/zawa.jpg';
import useStores from '../../../store/store';
import { useEffect, useRef } from 'react';

function usePrevious<T>(value: T) {
	const ref = useRef<T>();

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return ref.current;
}

export default function DetailsContent() {
	const { currentStore } = useStores();
	const nonNullVal = usePrevious(currentStore);
	return (
		<>
			<TitleContainer>
				<Title>{currentStore?.name || nonNullVal?.name}</Title>
				<SubTitle>{currentStore?.type || nonNullVal?.type}</SubTitle>
				<TimeTable>
					<p>Mon</p>
					<p>08:00</p>
					<p>Tue</p>
					<p>08:00</p>
					<p>Wed</p>
					<p>08:00</p>
					<p>Thu</p>
					<p>08:00</p>
					<p>Fri</p>
					<p>08:00</p>
					<p>Sat</p>
					<p>08:00</p>
					<p>Sun</p>
					<p>08:00</p>
				</TimeTable>
			</TitleContainer>

			<ImageContainer src={image}></ImageContainer>

			<TextContainer>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Sagittis aliquam malesuada bibendum arcu vitae
					elementum. Nam at lectus urna duis convallis convallis.
					Ullamcorper eget nulla facilisi etiam dignissim diam quis
					enim lobortis. Convallis posuere morbi leo urna molestie at
					elementum eu. Commodo ullamcorper a lacus vestibulum. Congue
					eu consequat ac felis donec et odio. Tempor nec feugiat nisl
					pretium fusce id. Dictum non consectetur a erat nam. Diam
					maecenas sed enim ut sem viverra aliquet eget. Cursus metus
					aliquam eleifend mi in nulla posuere sollicitudin aliquam.
					Mus mauris vitae ultricies leo integer malesuada. Dolor sit
					amet consectetur adipiscing elit ut aliquam purus. Massa
					tincidunt dui ut ornare lectus. Pellentesque habitant morbi
					tristique senectus et netus et malesuada fames. At in tellus
					integer feugiat scelerisque. Sed pulvinar proin gravida
					hendrerit lectus. Sit amet est placerat in egestas erat
					imperdiet.
				</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Sagittis aliquam malesuada bibendum arcu vitae
					elementum. Nam at lectus urna duis convallis convallis.
					Ullamcorper eget nulla facilisi etiam dignissim diam quis
					enim lobortis. Convallis posuere morbi leo urna molestie at
					elementum eu. Commodo ullamcorper a lacus vestibulum. Congue
					eu consequat ac felis donec et odio. Tempor nec feugiat nisl
					pretium fusce id. Dictum non consectetur a erat nam. Diam
					maecenas sed enim ut sem viverra aliquet eget. Cursus metus
					aliquam eleifend mi in nulla posuere sollicitudin aliquam.
					Mus mauris vitae ultricies leo integer malesuada. Dolor sit
					amet consectetur adipiscing elit ut aliquam purus. Massa
					tincidunt dui ut ornare lectus. Pellentesque habitant morbi
					tristique senectus et netus et malesuada fames. At in tellus
					integer feugiat scelerisque. Sed pulvinar proin gravida
					hendrerit lectus. Sit amet est placerat in egestas erat
					imperdiet.
				</p>
			</TextContainer>
		</>
	);
}

const TitleContainer = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: flex-start;
	max-width: 200px;
`;

const Title = styled.h2`
	font-size: 54px;
	font-weight: 500;
`;

const SubTitle = styled.p`
	font-size: 16px;
	color: rgba(0, 0, 0, 0.4);
	font-weight: 400;
`;

const TimeTable = styled.div`
	display: grid;
	width: fit-content;
	margin: 40px 0;
	column-gap: 20px;
	row-gap: 5px;
	grid-template-columns: repeat(2, 1fr);
	p {
		color: rgba(0, 0, 0, 0.4);
		font-size: 14px;
		font-weight: 400;
	}
`;

const ImageContainer = styled.img`
	display: flex;
	padding: 30px 0;
`;

const TextContainer = styled.div`
	display: flex;
	gap: 40px;
	padding: 40px 0;
	p {
		max-width: 500px;
		max-height: 200px;

		font-size: 16px;
		font-weight: 400;
	}
`;
