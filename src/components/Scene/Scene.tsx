import { Leva, useControls } from 'leva';
import Experience from './Experience';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import {
	OrbitControls,
	OrthographicCamera,
	PerspectiveCamera,
} from '@react-three/drei';
import useStores from '../../store/store';

export default function Scene() {
	// const controlsCamera = useControls('camera', {
	// 	fov: 25,
	// 	near: 0.1,
	// 	far: 1000,
	// 	position: {
	// 		value: {
	// 			x: -86.8,
	// 			y: 40.0,
	// 			z: -44,
	// 		},
	// 		step: 0.1,
	// 	},
	// 	rotation: {
	// 		value: {
	// 			x: 0,
	// 			y: 5.8,
	// 			z: 0,
	// 		},
	// 		step: 0.1,
	// 	},
	// });

	const { currentStore } = useStores();

	return (
		<>
			<Leva />
			<div className='background-canvas'>
				<Canvas
					gl={{
						antialias: true,
						toneMapping: THREE.NoToneMapping,
					}}>
					<Experience />

					<OrthographicCamera
						// rotation={[
						// 	controlsCamera.rotation.x,
						// 	controlsCamera.rotation.y,
						// 	controlsCamera.rotation.z,
						// ]}
						position={[-86.8, 40.0, -44]}
						// fov={controlsCamera.fov}
						makeDefault
						zoom={12}
						near={0}
						far={1000}
					/>

					<OrbitControls
						autoRotate={true}
						autoRotateSpeed={0.3}
						// minZoom={40}
						// maxZoom={140}
						minPolarAngle={0}
						maxPolarAngle={Math.PI / 2}
					/>
				</Canvas>
			</div>
		</>
	);
}
