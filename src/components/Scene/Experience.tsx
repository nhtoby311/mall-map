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

export default function Experience() {
	// const controlsPerformace = useControls('performance', {
	// 	perfVisible: true,
	// });

	return (
		<>
			{/* {controlsPerformace.perfVisible && <Perf position={'top-left'} />} */}

			{/* <Sky /> */}

			<color attach='background' args={['#d2cdbd']} />

			{/* <fogExp2 attach='fog' args={['#ffecce', 0.006]} /> */}

			<fog attach='fog' args={['#ffecce', 0, 650]} />

			<Suspense fallback={null}>
				<Model position={[0, -1, 0]} scale={2} />
			</Suspense>

			{/* <CameraRig /> */}
		</>
	);
}
