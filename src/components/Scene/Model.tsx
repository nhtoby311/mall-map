import { useGLTF, useTexture } from '@react-three/drei';
import useStores from '../../store/store';
import { motion as motion3d } from 'framer-motion-3d';

export function Model(props: any) {
	const { nodes, materials }: any = useGLTF('/assets/mall.glb');
	const bakedTexture = useTexture('/assets/baked.webp');
	bakedTexture.flipY = false;

	const { currentColor } = useStores();

	return (
		<group {...props} dispose={null} position={[18, 0, 17]}>
			<mesh castShadow receiveShadow geometry={nodes.scene.geometry}>
				<meshBasicMaterial map={bakedTexture} />
			</mesh>
			<motion3d.group animate={currentColor}>
				<mesh castShadow receiveShadow geometry={nodes.light.geometry}>
					<motion3d.meshBasicMaterial
						variants={{
							'#F9F9F9': {
								color: '#faf9ed',
								transition: { duration: 1 },
							},
							'#FDF8CA': {
								color: '#e8dfba',
								transition: { duration: 1 },
							},
						}}
					/>
				</mesh>
			</motion3d.group>
		</group>
	);
}

useGLTF.preload('/assets/mall.glb');
