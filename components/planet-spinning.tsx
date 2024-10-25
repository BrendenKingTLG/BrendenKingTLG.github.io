"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, FC, useMemo } from "react";
import * as THREE from "three";

// Mesh should be inside the Canvas component where hooks are allowed
const PlanetMesh: FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  const texture = useMemo(
    () => new THREE.TextureLoader().load("/Albedo.jpg"),
    []
  );
  useFrame(() => {
    if (meshRef.current) {
      //   meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.0009;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -1.5, 0]} rotation={[Math.PI / 5, 0, 0]}>
      <sphereGeometry args={[4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial map={texture} wireframe={false} />
    </mesh>
  );
};

const SpinningPlanet: FC = () => {
  return (
    <Canvas style={{ height: "300px", backgroundColor: "background/10" }}>
      <ambientLight intensity={3} /> {/* Default is 1, increased to 1.5 */}
      <pointLight intensity={2} position={[20, 20, 20]} />
      <PlanetMesh /> {/* PlanetMesh should be inside Canvas */}
    </Canvas>
  );
};

export default SpinningPlanet;
