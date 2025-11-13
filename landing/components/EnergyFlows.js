import { useEffect, useRef, useState } from 'react';

export default function EnergyFlows() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lineOpacities, setLineOpacities] = useState([0.3, 0.3, 0.3, 0.3]);
  const animationFrameRef = useRef(null);

  // Setup scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        // Calculate scroll progress
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
        setScrollProgress(progress);

        // Update line opacities based on scroll
        const baseOpacity = 0.2 + progress * 0.7; // 0.2 to 0.9
        setLineOpacities([
          Math.min(baseOpacity + 0, 1),      // Line 1
          Math.min(baseOpacity + 0.1, 1),    // Line 2 - slightly brighter
          Math.min(baseOpacity + 0.2, 1),    // Line 3 - more bright
          Math.min(baseOpacity + 0.15, 1),   // Line 4 - medium bright
        ]);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <svg
        viewBox="0 0 1400 1000"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'visible',
        }}
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Define gradient for all flow lines */}
        <defs>
          <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8A882" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#E6D0B3" stopOpacity="1" />
            <stop offset="100%" stopColor="#F7F3E9" stopOpacity="0.8" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="energyGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Flow Line 1: Top Left to Center (Inner Wisdom) */}
        <path
          d="M 100 150 Q 250 300 400 450 T 500 550"
          stroke="url(#energyGradient)"
          strokeWidth="2.5"
          fill="none"
          opacity={lineOpacities[0]}
          filter="url(#energyGlow)"
          className="energy-line-1"
          style={{
            transition: 'opacity 0.3s ease-out',
            animation: `energyPulse 4s ease-in-out infinite`,
          }}
        />

        {/* Flow Line 2: Top Right to Center (Embodied Presence) */}
        <path
          d="M 1300 200 Q 1100 350 900 500 T 800 600"
          stroke="url(#energyGradient)"
          strokeWidth="2.5"
          fill="none"
          opacity={lineOpacities[1]}
          filter="url(#energyGlow)"
          className="energy-line-2"
          style={{
            transition: 'opacity 0.3s ease-out',
            animation: `energyPulse 4s ease-in-out infinite 1s`,
          }}
        />

        {/* Flow Line 3: Center flowing right (Conscious Relating) */}
        <path
          d="M 200 700 Q 400 800 600 850 T 800 900"
          stroke="url(#energyGradient)"
          strokeWidth="2.5"
          fill="none"
          opacity={lineOpacities[2]}
          filter="url(#energyGlow)"
          className="energy-line-3"
          style={{
            transition: 'opacity 0.3s ease-out',
            animation: `energyPulse 4s ease-in-out infinite 2s`,
          }}
        />

        {/* Flow Line 4: Center flowing left (Systemic Impact) */}
        <path
          d="M 1200 750 Q 1000 850 800 920 T 600 950"
          stroke="url(#energyGradient)"
          strokeWidth="2.5"
          fill="none"
          opacity={lineOpacities[3]}
          filter="url(#energyGlow)"
          className="energy-line-4"
          style={{
            transition: 'opacity 0.3s ease-out',
            animation: `energyPulse 4s ease-in-out infinite 3s`,
          }}
        />

        {/* Central glow nodes */}
        <circle
          cx="500"
          cy="450"
          r="20"
          fill="url(#energyGradient)"
          opacity={scrollProgress * 0.6}
          style={{
            transition: 'opacity 0.3s ease-out',
            animation: `nodePulse 4s ease-in-out infinite`,
          }}
        />

        <circle
          cx="700"
          cy="650"
          r="20"
          fill="url(#energyGradient)"
          opacity={scrollProgress * 0.6}
          style={{
            transition: 'opacity 0.3s ease-out',
            animation: `nodePulse 4s ease-in-out infinite 2s`,
          }}
        />
      </svg>
    </div>
  );
}
