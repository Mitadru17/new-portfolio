/* eslint-disable react/no-unknown-property */
"use client";
import { Canvas } from "@react-three/fiber";

export default function SimpleTest() {
  return (
    <div className="w-full h-96 bg-gray-100 border border-gray-300">
      <h3 className="text-black p-4">Simple 3D Test</h3>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
}
