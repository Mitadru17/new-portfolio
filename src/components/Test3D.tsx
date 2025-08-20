/* eslint-disable react/no-unknown-property */
"use client";
import { Canvas } from "@react-three/fiber";

function TestCube() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function Test3D() {
  return (
    <div className="w-full h-96 bg-gray-900 border-2 border-red-500">
      <div className="text-white p-2">3D Canvas Test - Should show pink cube</div>
      <Canvas className="w-full h-80">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <TestCube />
      </Canvas>
    </div>
  );
}
