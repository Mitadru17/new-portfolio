"use client";
import React, { useRef, useEffect, useState } from 'react';

interface ScrollStackItem {
  id: string;
  content: React.ReactNode;
}

interface ScrollStackProps {
  items: ScrollStackItem[];
  className?: string;
  stackHeight?: number;
  itemHeight?: number;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  items,
  className = '',
  stackHeight = 400,
  itemHeight = 300,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = Math.min(scrollTop / scrollHeight, 1);
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`relative ${className}`} style={{ height: stackHeight }}>
      <div
        ref={containerRef}
        className="h-full overflow-y-auto"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div style={{ height: items.length * itemHeight + stackHeight }}>
          {items.map((item, index) => {
            const progress = Math.max(0, Math.min(1, (scrollProgress * items.length) - index));
            const translateY = Math.max(0, (1 - progress) * 100);
            const scale = 0.95 + (progress * 0.05);
            const opacity = 0.7 + (progress * 0.3);

            return (
              <div
                key={item.id}
                className="sticky top-0 transition-all duration-300 ease-out"
                style={{
                  height: itemHeight,
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity,
                  zIndex: items.length - index,
                }}
              >
                {item.content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollStack;
