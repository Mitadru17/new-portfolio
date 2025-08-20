"use client";
import dynamic from 'next/dynamic';

// Import the 3D component only on client side to avoid SSR issues
const ThreeLanyard = dynamic(() => import('./ThreeLanyard'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gray-900 flex items-center justify-center">
      <div className="text-white">Loading 3D Model...</div>
    </div>
  ),
});

export default function LanyardWrapper() {
  return <ThreeLanyard />;
}
