// Three.js JSX extensions for meshline
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import { Object3DNode, MaterialNode } from '@react-three/fiber'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any
      meshLineMaterial: any
      boxGeometry: any
      cylinderGeometry: any
      torusGeometry: any
      meshPhysicalMaterial: any
      meshStandardMaterial: any
    }
  }
}

// Extend the fiber namespace
declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>
    meshLineMaterial: MaterialNode<MeshLineMaterial, typeof MeshLineMaterial>
  }
}
