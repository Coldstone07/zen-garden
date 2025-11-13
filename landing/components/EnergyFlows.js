import { useEffect, useRef, useState } from 'react';

export default function EnergyFlows() {
  const containerRef = useRef(null);
  const pathRefs = useRef([null, null, null, null]);
  const circleRefs = useRef([null, null]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const scrollFrameRef = useRef(null);
  const animationFrameRef = useRef(null);
  const animationStartRef = useRef(Date.now());

  // Check for prefers-reduced-motion on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addListener(handleMediaChange);
    return () => mediaQuery.removeListener(handleMediaChange);
  }, []);

  // Setup pulsing animation using RAF
  useEffect(() => {
    if (prefersReducedMotion) return; // Skip animations for motion-sensitive users

    const animate = () => {
      const elapsed = Date.now() - animationStartRef.current;
      const progress = (elapsed % 4000) / 4000; // 4 second cycle

      // Calculate pulse values (0 → 1 → 0)
      const pulse = Math.sin(progress * Math.PI) * 0.5 + 0.5; // 0 to 1
      const minStroke = 2.5;
      const maxStroke = 4.5;
      const strokeWidth = minStroke + (maxStroke - minStroke) * pulse;

      // Update all path elements with staggered timing
      pathRefs.current.forEach((pathEl, idx) => {
        if (pathEl) {
          const staggerDelay = (idx * 1000) / 4000; // Stagger by 1 second
          const staggeredProgress = (progress + staggerDelay) % 1;
          const staggeredPulse = Math.sin(staggeredProgress * Math.PI) * 0.5 + 0.5;
          const staggeredStroke = minStroke + (maxStroke - minStroke) * staggeredPulse;
          pathEl.setAttribute('stroke-width', staggeredStroke.toString());
        }
      });

      // Update circle nodes
      circleRefs.current.forEach((circleEl, idx) => {
        if (circleEl) {
          const staggerDelay = (idx * 2000) / 4000;
          const staggeredProgress = (progress + staggerDelay) % 1;
          const staggeredPulse = Math.sin(staggeredProgress * Math.PI) * 0.5 + 0.5;
          const minRadius = 18;
          const maxRadius = 28;
          const radius = minRadius + (maxRadius - minRadius) * staggeredPulse;
          circleEl.setAttribute('r', radius.toString());
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [prefersReducedMotion]);

  // Setup scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      if (scrollFrameRef.current) {
        cancelAnimationFrame(scrollFrameRef.current);
      }

      scrollFrameRef.current = requestAnimationFrame(() => {
        // Calculate scroll progress
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
        setScrollProgress(progress);

        // Update opacity of paths based on scroll
        const baseOpacity = 0.2 + progress * 0.7; // 0.2 to 0.9
        pathRefs.current.forEach((pathEl, idx) => {
          if (pathEl) {
            const offsetOpacity = Math.min(
              baseOpacity + (idx * 0.1),
              1
            );
            pathEl.setAttribute('opacity', offsetOpacity.toString());
          }
        });

        // Update circle opacity based on scroll
        circleRefs.current.forEach((circleEl) => {
          if (circleEl) {
            circleEl.setAttribute('opacity', (progress * 0.6).toString());
          }
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollFrameRef.current) {
        cancelAnimationFrame(scrollFrameRef.current);
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
          ref={(el) => (pathRefs.current[0] = el)}
          d="M 100 150 Q 250 300 400 450 T 500 550"
          stroke="url(#energyGradient)"
          strokeWidth="2.5"
          fill="none"
          opacity="0.3"
          filter="url(#energyGlow)"
        />

        {/* Flow Line 2: Top Right to Center (Embodied Presence) */}
        <path
          ref={(el) => (pathRefs.current[1] = el)}
          d="M 1300 200 Q 1100 350 900 500 T 800 600"
          stroke="url(#energyGradient)"
          strokeWidth="2.5"
          fill="none"
          opacity="0.3"
          filter="url(#energyGlow)"
        />

        {/* Flow Line 3: Center flowing right (Conscious Relating) */}
        <path
          ref={(el) => (pathRefs.current[2] = el)}
          d="M 200 700 Q 400 800 600 850 T 800 900"
          stroke="url(#energyGradient)"
          strokeWidth="2.5"
          fill="none"
          opacity="0.3"
          filter="url(#energyGlow)"
        />

        {/* Flow Line 4: Center flowing left (Systemic Impact) */}
        <path
          ref={(el) => (pathRefs.current[3] = el)}
          d="M 1200 750 Q 1000 850 800 920 T 600 950"
          stroke="url(#energyGradient)"
          strokeWidth="2.5"
          fill="none"
          opacity="0.3"
          filter="url(#energyGlow)"
        />

        {/* Central glow nodes */}
        <circle
          ref={(el) => (circleRefs.current[0] = el)}
          cx="500"
          cy="450"
          r="20"
          fill="url(#energyGradient)"
          opacity="0"
        />

        <circle
          ref={(el) => (circleRefs.current[1] = el)}
          cx="700"
          cy="650"
          r="20"
          fill="url(#energyGradient)"
          opacity="0"
        />
      </svg>
    </div>
  );
}
