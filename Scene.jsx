import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

const AnimatedSphere = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = time * 0.2;
            meshRef.current.rotation.y = time * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
                <MeshDistortMaterial
                    color="#444444"
                    attach="material"
                    distort={0.4}
                    speed={3}
                    roughness={0.1} // High gloss
                    metalness={0.8} // Metallic for reflections
                />
            </Sphere>
        </Float>
    );
};

export const Scene = () => {
    return (
        <div id="scene" className="w-full h-full">
            <Canvas className="w-full h-full">
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 5, 2]} intensity={2} color="#ffffff" />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
};
