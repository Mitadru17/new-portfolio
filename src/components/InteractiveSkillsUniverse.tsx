/* eslint-disable react/no-unknown-property */
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls, Stars, Float, Sphere } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";

interface SkillOrb {
  name: string;
  level: number;
  position: [number, number, number];
  color: string;
  category: string;
  icon: string;
}

function SkillOrb({ skill, onClick }: { skill: SkillOrb; onClick: (skill: SkillOrb) => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  const size = skill.level / 100 * 1.5 + 0.5;

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={skill.position}>
        <mesh
          ref={meshRef}
          onClick={() => onClick(skill)}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial
            color={skill.color}
            emissive={skill.color}
            emissiveIntensity={hovered ? 0.3 : 0.1}
            transparent
            opacity={0.8}
          />
        </mesh>
        
        {/* Skill level ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[size + 0.2, 0.02]} />
          <meshBasicMaterial color={skill.color} transparent opacity={0.6} />
        </mesh>
        
        {/* Skill name text */}
        <Text
          position={[0, size + 0.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="black"
        >
          {skill.name}
        </Text>
        
        {/* Skill level text */}
        <Text
          position={[0, -size - 0.3, 0]}
          fontSize={0.2}
          color={skill.color}
          anchorX="center"
          anchorY="middle"
        >
          {skill.level}%
        </Text>
      </group>
    </Float>
  );
}

function CategoryCloud({ skills, category, centerPosition }: { 
  skills: SkillOrb[]; 
  category: string; 
  centerPosition: [number, number, number];
}) {
  const categorySkills = skills.filter(skill => skill.category === category);
  const cloudRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y += 0.005;
    }
  });

  const categoryColors: Record<string, string> = {
    "Programming Languages": "#F7DF1E",
    "Frontend Development": "#61DAFB", 
    "Backend Development": "#339933",
    "AI & Data (Bonus Edge)": "#FF6B35",
    "Tools & Dev Practices": "#F05032"
  };

  return (
    <group ref={cloudRef} position={centerPosition}>
      {/* Category title */}
      <Text
        position={[0, 3, 0]}
        fontSize={0.5}
        color={categoryColors[category] || "#ffffff"}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.03}
        outlineColor="black"
      >
        {category}
      </Text>
      
      {/* Skills arranged in a sphere around the center */}
      {categorySkills.map((skill, index) => {
        const angle = (index / categorySkills.length) * Math.PI * 2;
        const radius = 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 2;
        
        return (
          <SkillOrb
            key={skill.name}
            skill={{
              ...skill,
              position: [x, y, z]
            }}
            onClick={() => {}}
          />
        );
      })}
    </group>
  );
}

export default function InteractiveSkillsUniverse({ skills }: { skills: any }) {
  const [selectedSkill, setSelectedSkill] = useState<SkillOrb | null>(null);

  // Convert skills data to SkillOrb format
  const skillOrbs: SkillOrb[] = useMemo(() => {
    const orbs: SkillOrb[] = [];
    Object.entries(skills).forEach(([category, items]: [string, any]) => {
      items.forEach((skill: any) => {
        orbs.push({
          name: skill.name,
          level: skill.level,
          position: [0, 0, 0], // Will be set by CategoryCloud
          color: skill.color,
          category: category,
          icon: skill.icon
        });
      });
    });
    return orbs;
  }, [skills]);

  const categories = Object.keys(skills);
  const categoryPositions: [number, number, number][] = [
    [0, 0, 0],      // Programming Languages (center)
    [-8, 2, 0],     // Frontend Development  
    [8, 2, 0],      // Backend Development
    [0, -6, 0],     // AI & Data
    [0, 6, 0],      // Tools & Dev Practices
  ];

  return (
    <div className="w-full h-[600px] bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 rounded-xl overflow-hidden relative">
      {/* Info Panel */}
      {selectedSkill && (
        <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white max-w-sm">
          <h3 className="font-bold text-lg">{selectedSkill.name}</h3>
          <p className="text-sm text-gray-300 mb-2">{selectedSkill.category}</p>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${selectedSkill.level}%`,
                background: selectedSkill.color
              }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-2">Proficiency: {selectedSkill.level}%</p>
        </div>
      )}

      {/* Controls hint */}
      <div className="absolute bottom-4 right-4 z-10 text-white/60 text-xs">
        Click & drag to orbit • Scroll to zoom • Click skills to learn more
      </div>

      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b35" />
        
        {/* Background stars */}
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1}
        />
        
        {/* Category clouds */}
        {categories.map((category, index) => (
          <CategoryCloud
            key={category}
            skills={skillOrbs}
            category={category}
            centerPosition={categoryPositions[index]}
          />
        ))}
        
        {/* Connection lines between categories - simplified */}
        {categoryPositions.slice(0, -1).map((pos, index) => {
          const nextPos = categoryPositions[index + 1];
          const points = [
            new THREE.Vector3(pos[0], pos[1], pos[2]),
            new THREE.Vector3(nextPos[0], nextPos[1], nextPos[2])
          ];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          
          return (
            <primitive key={`line-${index}`} object={
              new THREE.Line(
                geometry, 
                new THREE.LineBasicMaterial({ color: 0x444444, transparent: true, opacity: 0.2 })
              )
            } />
          );
        })}
        
        <OrbitControls 
          enablePan={false}
          minDistance={10}
          maxDistance={50}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
