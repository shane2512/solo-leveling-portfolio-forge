
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import { OrbitControls, Text, Sphere } from '@react-three/drei';

const FloatingCube = () => {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.z += delta * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#00ffff"
        emissive="#00ffff"
        emissiveIntensity={0.3}
        transparent
        opacity={0.8}
        wireframe
      />
    </mesh>
  );
};

const InnerCore = () => {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.2;
      meshRef.current.rotation.y -= delta * 0.3;
      meshRef.current.rotation.z -= delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        color="#ff0066"
        emissive="#ff0066"
        emissiveIntensity={0.4}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

const FloatingOrbs = () => {
  const groupRef = useRef<Group>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  const orbs = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    const radius = 4;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    
    return (
      <mesh key={i} position={[x, 0, z]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial
          color={i % 2 === 0 ? "#00ffff" : "#ff0066"}
          emissive={i % 2 === 0 ? "#00ffff" : "#ff0066"}
          emissiveIntensity={0.5}
        />
      </mesh>
    );
  });

  return <group ref={groupRef}>{orbs}</group>;
};

const SystemText = () => {
  const textRef = useRef<Group>(null!);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5 + 3;
    }
  });

  return (
    <group ref={textRef}>
      <Text
        position={[0, 0, 0]}
        fontSize={0.5}
        color="#00ffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/orbitron.woff"
      >
        SYSTEM ACTIVE
      </Text>
    </group>
  );
};

const EnhancedHologramCube = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff0066" />
        <pointLight position={[0, 10, 0]} intensity={0.3} color="#ffffff" />
        
        <FloatingCube />
        <InnerCore />
        <FloatingOrbs />
        <SystemText />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default EnhancedHologramCube;
