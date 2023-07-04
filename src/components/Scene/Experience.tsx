import { useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import {
	TransformControls,
	OrbitControls,
	Html,
	MeshReflectorMaterial,
	Sky,
	Environment,
	Lightformer,
	Float,
	Stage,
	AccumulativeShadows,
	RandomizedLight,
} from '@react-three/drei';

import { useControls } from 'leva';

import { Perf } from 'r3f-perf';
import { Model } from './Model';
import Points from './Points';
import useStores from '../../store/store';

export default function Experience() {
	// const controlsPerformace = useControls('performance', {
	// 	perfVisible: true,
	// });

	return (
		<>
			{/* {controlsPerformace.perfVisible && <Perf position={'top-left'} />} */}

			{/* <Sky /> */}

			{/* <Environment preset='warehouse' /> */}

			<color attach='background' args={['#d2cdbd']} />

			{/* <fogExp2 attach='fog' args={['#ffecce', 0.006]} /> */}

			<fog attach='fog' args={['#ffecce', 0, 650]} />

			<Suspense fallback={null}>
				<Model position={[0, -1, 0]} scale={2} />
				<Points />
			</Suspense>

			{/* <CameraRig /> */}
		</>
	);
}
