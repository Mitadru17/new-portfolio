/* eslint-disable react/no-unknown-property */
"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, Html } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RigidBodyProps,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";
import Image from "next/image";

extend({ MeshLineGeometry, MeshLineMaterial });

interface SimpleLanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

export default function SimpleLanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
}: SimpleLanyardProps) {
  return (
    <div className="w-full h-96 relative">
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: transparent }}
        className="w-full h-full"
        onCreated={({ gl }) =>
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
        }
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <LanyardSystem />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

function LanyardSystem() {
  const band = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: any = {
    type: "dynamic" as RigidBodyProps["type"],
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  // Create lanyard texture
  const [lanyardTexture] = useState(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 32;
    const context = canvas.getContext('2d');
    if (context) {
      // Create a black lanyard texture with decorative patterns
      context.fillStyle = '#1a1a1a';
      context.fillRect(0, 0, 128, 32);
      
      // Add decorative white symbols
      context.fillStyle = '#ffffff';
      context.font = '16px Arial';
      context.textAlign = 'center';
      context.fillText('⚛', 32, 20);
      context.fillText('⚛', 96, 20);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    return texture;
  });

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== "boolean") {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(
            ref.current.translation()
          );
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (10 + clampedDistance * 40)
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current?.geometry?.setPoints(curve.getPoints(32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = "chordal";

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type={"fixed" as RigidBodyProps["type"]} />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={
            dragged
              ? ("kinematicPosition" as RigidBodyProps["type"])
              : ("dynamic" as RigidBodyProps["type"])
          }
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          
          {/* ID Card */}
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation()))
              );
            }}
          >
            {/* Card Body */}
            <mesh>
              <boxGeometry args={[1.6, 2.25, 0.02]} />
              <meshPhysicalMaterial
                color="#f8f9fa"
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.1}
                metalness={0.1}
              />
            </mesh>
            
            {/* Card Content - HTML overlay */}
            <Html
              transform
              occlude
              position={[0, 0, 0.02]}
              style={{
                width: '160px',
                height: '225px',
                background: 'white',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontFamily: 'system-ui',
                color: '#000',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                userSelect: 'none',
                pointerEvents: 'none'
              }}
            >
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%',
                overflow: 'hidden',
                marginBottom: '10px',
                position: 'relative'
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
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Mitadru Roy</div>
                <div style={{ color: '#666', fontSize: '10px' }}>Creative Developer</div>
              </div>
              
              {/* Logo */}
              <div style={{ 
                fontSize: '24px', 
                marginTop: '10px',
                fontWeight: 'bold'
              }}>
                ⚛
              </div>
            </Html>
            
            {/* Lanyard Clip */}
            <mesh position={[0, 1.1, 0]}>
              <cylinderGeometry args={[0.05, 0.05, 0.1]} />
              <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
            </mesh>
            
            {/* Lanyard Hook */}
            <mesh position={[0, 1.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.08, 0.02]} />
              <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        </RigidBody>
      </group>
      
      {/* Lanyard Rope */}
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#1a1a1a"
          depthTest={false}
          resolution={[1000, 1000]}
          useMap
          map={lanyardTexture}
          repeat={[-8, 1]}
          lineWidth={1.5}
        />
      </mesh>
    </>
  );
}
