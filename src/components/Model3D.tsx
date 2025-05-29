
import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { Mesh } from 'three';

// Dummy 3D model component - easily replaceable
const DummyModel = () => {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#00ffff"
        emissive="#00ffff"
        emissiveIntensity={0.2}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

// GLB Model Loader - for custom models
const GLBModel = ({ modelPath }: { modelPath: string }) => {
  const { scene } = useGLTF(modelPath);
  const meshRef = useRef<any>(null!);

  // Remove auto-rotation for custom model
  return <primitive ref={meshRef} object={scene} scale={[2.5, 2.5, 2.5]} position={[0, -1, 0]} />;
};

interface Model3DProps {
  modelPath?: string;
  useDummy?: boolean;
}

const Model3D = ({ modelPath, useDummy = true }: Model3DProps) => {
  return (
    <div className="w-96 h-96 relative mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-glow-pulse"></div>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Enhanced lighting setup */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-10, 10, 5]} intensity={0.8} color="#00ffff" />
        <pointLight position={[5, 5, 5]} intensity={0.7} color="#ff0066" />
        <Environment preset="studio" />
        
        <Suspense fallback={<DummyModel />}>
          {useDummy || !modelPath ? (
            <DummyModel />
          ) : (
            <GLBModel modelPath={modelPath} />
          )}
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          enableRotate={true}
        />
      </Canvas>
    </div>
  );
};

export default Model3D;
