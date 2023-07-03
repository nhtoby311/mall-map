import { Html } from '@react-three/drei';
import styled from 'styled-components';
import CutlerySVG from '../SVG/CutlerySVG';

export default function Points() {
	return (
		<>
			<Html as='div' position={[-1, 8, 40]}>
				<Logo>ZAWA</Logo>
			</Html>

			<Html as='div' position={[21, 4, 35]}>
				<Icon>
					<StyledCutlery />
				</Icon>
			</Html>

			<Html as='div' position={[38, 8, 35]}>
				<Logo>CBC</Logo>
			</Html>

			<Html as='div' position={[38, 8, -35]}>
				<Logo>BestBit</Logo>
			</Html>

			<Html as='div' position={[23, 6, -45]}>
				<Icon>
					<StyledCutlery />
				</Icon>
			</Html>
		</>
	);
}

const Logo = styled.p`
	font-size: 28px;
	font-weight: 700;
	user-select: none;
	cursor: pointer;
	color: #333333;
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 6px 5px;
	background: #e1be89;
	border-radius: 5px;
`;

const StyledCutlery = styled(CutlerySVG)`
	width: 28px;
	cursor: pointer;
`;
