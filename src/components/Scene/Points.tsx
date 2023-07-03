import { Html } from '@react-three/drei';
import styled from 'styled-components';
import CutlerySVG from '../SVG/CutlerySVG';
import useStores from '../../store/store';

export default function Points() {
	const { stores } = useStores();

	return (
		<>
			{stores.map((store) => (
				<Point
					position={store.positions}
					type={store.type}
					id={store.id}
					name={store.name}
				/>
			))}
		</>
	);
}

const Point = ({ position, type, id, name }: any) => {
	const { setCurrentStore } = useStores();

	return (
		<Html as='div' position={position}>
			{type === 'food' ? (
				<Icon onClick={() => setCurrentStore(id)}>
					<StyledCutlery />
				</Icon>
			) : (
				<Logo onClick={() => setCurrentStore(id)}>{name}</Logo>
			)}
		</Html>
	);
};

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
