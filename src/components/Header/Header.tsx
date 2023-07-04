import { useState } from 'react';
import styled from 'styled-components';
import useStores from '../../store/store';

export default function Header() {
	const { currentColor, setCurrentColor } = useStores();

	return (
		<Container>
			<Logo>Mall.</Logo>
			<ColorPickerCont>
				<ColorPicker
					color='#F9F9F9'
					className={currentColor === '#F9F9F9' ? 'active' : ''}
					onClick={() => setCurrentColor('#F9F9F9')}
				/>

				<ColorPicker
					color='#FDF8CA'
					className={currentColor === '#FDF8CA' ? 'active' : ''}
					onClick={() => setCurrentColor('#FDF8CA')}
				/>
			</ColorPickerCont>
		</Container>
	);
}

const ColorPicker = styled.div<any>`
	width: 38px;
	height: 38px;
	border-radius: 50%;
	background: ${(props) => props.color};
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: auto;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	&.active {
		width: 28px;
		height: 28px;

		&::after {
			content: '';
			position: absolute;
			width: 38px;
			height: 38px;
			border-radius: 50%;
			border: 2px solid #f9f9f9;
		}
	}
`;

const Container = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 30px 0;
`;

const Logo = styled.h1`
	font-size: 54px;
	font-weight: 700;
	color: #333;
`;

const ColorPickerCont = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;
