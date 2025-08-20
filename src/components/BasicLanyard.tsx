/* eslint-disable react/no-unknown-property */
"use client";
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import Image from "next/image";

function FloatingCard() {
  const cardRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (cardRef.current) {
      cardRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      cardRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* ID Card */}
      <mesh ref={cardRef} position={[0, -1, 0]}>
        <boxGeometry args={[2, 2.8, 0.1]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      {/* Simple lanyard line */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 4]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Card content overlay */}
      <mesh position={[0, -1, 0.06]}>
        <planeGeometry args={[1.8, 2.6]} />
        <meshBasicMaterial color="#f8f9fa" />
      </mesh>
      
      {/* Photo placeholder */}
      <mesh position={[0, 0.2, 0.07]}>
        <circleGeometry args={[0.4]} />
        <meshBasicMaterial color="#4f46e5" />
      </mesh>
    </group>
  );
}

export default function BasicLanyard() {
  return (
    <div className="w-full h-96 bg-transparent">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, 5]} intensity={0.4} />
        <FloatingCard />
      </Canvas>
    </div>
  );
}
