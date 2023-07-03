import { useGLTF, useTexture } from '@react-three/drei';

export function Model(props: any) {
	const { nodes, materials }: any = useGLTF('/assets/mall.glb');
	const bakedTexture = useTexture('/assets/baked.webp');
	bakedTexture.flipY = false;

	return (
		<group {...props} dispose={null} position={[18, 0, 17]}>
			<mesh castShadow receiveShadow geometry={nodes.scene.geometry}>
				<meshBasicMaterial map={bakedTexture} />
			</mesh>
			<mesh castShadow receiveShadow geometry={nodes.light.geometry}>
				<meshBasicMaterial color='#e4daab' />
			</mesh>
		</group>
	);
}

useGLTF.preload('/assets/mall.glb');
