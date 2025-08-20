/* eslint-disable react/no-unknown-property */
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Html, Environment, ContactShadows } from "@react-three/drei";
import { useRef, useState, Suspense } from "react";
import * as THREE from "three";
import Image from "next/image";

function InteractiveLanyard() {
  const cardRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  // Load the GLB model from the correct path
  const { scene, nodes, materials } = useGLTF('/models/base.glb') as any;
  
  useFrame((state) => {
    if (cardRef.current) {
      // Gentle swaying motion
      const time = state.clock.elapsedTime;
      cardRef.current.rotation.y = Math.sin(time * 0.5) * 0.1 + (clicked ? Math.sin(time * 2) * 0.3 : 0);
      cardRef.current.position.y = Math.sin(time * 0.8) * 0.05 - 1;
      
      // Mouse interaction
      if (hovered) {
        cardRef.current.rotation.y += (state.pointer.x * 0.5 - cardRef.current.rotation.y) * 0.05;
        cardRef.current.rotation.x += (state.pointer.y * 0.3 - cardRef.current.rotation.x) * 0.05;
      }
      
      // Scale effect when clicked
      const targetScale = clicked ? 1.1 : hovered ? 1.05 : 1;
      cardRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group>
      {/* Lanyard Strap */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 3]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
        {/* Your GLB Model */}
        <group 
          ref={cardRef}
          position={[0, -1, 0]}
          scale={[1, 1, 1]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setClicked(true)}
          onPointerUp={() => setClicked(false)}
          onClick={() => {
            setClicked(!clicked);
            setTimeout(() => setClicked(false), 200);
          }}
        >
          {/* Load the GLB model with error handling */}
          {scene ? (
            <primitive 
              object={scene.clone()} 
              scale={[2, 2, 2]}
              rotation={[0, 0, 0]}
            />
          ) : (
            // Fallback geometry if model fails to load
            <mesh>
              <boxGeometry args={[1.6, 2.2, 0.1]} />
              <meshStandardMaterial color="white" />
            </mesh>
          )}        {/* ID Card Content Overlay */}
        <Html
          transform
          occlude
          position={[0, 0, 0.1]}
          style={{
            width: '150px',
            height: '200px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontFamily: 'system-ui',
            color: '#000',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            border: '1px solid rgba(255,255,255,0.2)',
            userSelect: 'none',
            pointerEvents: 'none',
            padding: '15px',
            transition: 'all 0.3s ease'
          }}
        >
          <div style={{ 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%',
            overflow: 'hidden',
            marginBottom: '12px',
            position: 'relative',
            border: '2px solid #4f46e5'
          }}>
            <Image
              src="/images/mitadru-photo.jpg"
              alt="Mitadru Roy"
              width={60}
              height={60}
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#1a1a1a' }}>Mitadru Roy</div>
            <div style={{ color: '#666', fontSize: '10px' }}>Creative Developer</div>
          </div>
          
          <div style={{ 
            fontSize: '24px', 
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#4f46e5',
            textShadow: '0 2px 4px rgba(79,70,229,0.3)'
          }}>
            ⚛
          </div>
          
          <div style={{ 
            fontSize: '8px', 
            color: '#999',
            textAlign: 'center',
            lineHeight: '1.4'
          }}>
            React Developer<br/>
            Next.js Specialist<br/>
            Three.js Creator
          </div>
          
          {/* Status indicator */}
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '8px',
            height: '8px',
            backgroundColor: '#22c55e',
            borderRadius: '50%',
            boxShadow: '0 0 6px rgba(34,197,94,0.6)'
          }} />
        </Html>
      </group>
      
      {/* Contact shadows for realism */}
      <ContactShadows 
        position={[0, -2.5, 0]} 
        opacity={0.3} 
        scale={3} 
        blur={2} 
        far={2.5} 
      />
    </group>
  );
}

function LoadingFallback() {
  return (
    <div className="w-full h-96 flex items-center justify-center bg-gray-900/10 rounded-lg">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading 3D Model...</p>
      </div>
    </div>
  );
}

export default function ThreeLanyard() {
  return (
    <div className="w-full h-96 bg-transparent">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          shadows
        >
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={0.8} 
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[-3, 2, 3]} intensity={0.3} color="#4f46e5" />
          <spotLight 
            position={[0, 5, 0]} 
            intensity={0.5} 
            angle={0.3} 
            penumbra={1} 
            castShadow
          />
          
          {/* Environment for realistic reflections */}
          <Environment preset="studio" />
          
          <InteractiveLanyard />
        </Canvas>
      </Suspense>
    </div>
  );
}

// Preload the GLB model from the correct path
useGLTF.preload('/models/base.glb');
