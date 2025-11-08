/**
 * Three.js Celestial Weaver Animation System
 * Handles the background animation with performance optimizations
 */

function shouldUseFallback() {
    // Respect user preference for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;

    // Force fallback for mobile devices for better performance
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) return true;

    // Check for slow connections
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection && (connection.effectiveType.includes('2g') || connection.effectiveType.includes('3g'))) return true;

    // Check if Three.js is available
    if (typeof THREE === 'undefined') return true;

    return false;
}

function initializeCelestialWeaver() {
    if (shouldUseFallback()) return;

    let scene, camera, renderer, nebulaParticles, weaverLines;
    let mouseX = 0, mouseY = 0;
    const isHighEnd = window.innerWidth > 1024;
    const PARTICLE_COUNT = isHighEnd ? 5000 : 2500;
    const initialPositions = new Float32Array(PARTICLE_COUNT * 3);
    const targetPositions = new Float32Array(PARTICLE_COUNT * 3);
    
    const colorPrimaryAccent = new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim());
    const colorSecondaryAccent = new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--accent-secondary').trim());

    function init() {
        try {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 8;

            const nebulaGeometry = new THREE.BufferGeometry();
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const r = 4 + Math.random() * 4;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos((Math.random() * 2) - 1);
                initialPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
                initialPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
                initialPositions[i * 3 + 2] = r * Math.cos(phi);
                targetPositions[i * 3] = 0;
                targetPositions[i * 3 + 1] = 0;
                targetPositions[i * 3 + 2] = 0;
            }
            nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(initialPositions.slice(), 3));
            
            const nebulaMaterial = new THREE.PointsMaterial({ size: 0.02, color: colorSecondaryAccent, transparent: true, opacity: 0.7 });
            nebulaParticles = new THREE.Points(nebulaGeometry, nebulaMaterial);
            scene.add(nebulaParticles);

            const lineGeometry = new THREE.BufferGeometry();
            lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(PARTICLE_COUNT * 2 * 3), 3));
            const lineMaterial = new THREE.LineBasicMaterial({ color: colorPrimaryAccent, transparent: true, opacity: 0, linewidth: 1 });
            weaverLines = new THREE.LineSegments(lineGeometry, lineMaterial);
            scene.add(weaverLines);

            // Glowing sphere (climaxObject) removed to improve text readability
            // const climaxGeometry = new THREE.SphereGeometry(1.5, 32, 32);
            // const climaxMaterial = new THREE.MeshStandardMaterial({
            //     color: colorPrimaryAccent,
            //     emissive: colorPrimaryAccent,
            //     emissiveIntensity: 0,
            //     transparent: true,
            //     opacity: 0,
            //     blending: THREE.AdditiveBlending 
            // });
            // climaxObject = new THREE.Mesh(climaxGeometry, climaxMaterial);
            // scene.add(climaxObject);
            
            scene.add(new THREE.AmbientLight(0xffffff, 0.2));
            const pointLight = new THREE.PointLight(0xffffff, 1);
            pointLight.position.set(5, 5, 5);
            scene.add(pointLight);

            const canvas = document.getElementById('zen-garden-canvas');
            if (!canvas) {
                console.warn('Canvas element not found');
                return;
            }
            
            renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        } catch (error) {
            console.warn('Three.js initialization failed:', error);
            // Hide canvas if it fails
            const canvas = document.getElementById('zen-garden-canvas');
            if (canvas) canvas.style.display = 'none';
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        render();
    }

    function render() {
        try {
            if (!renderer || !scene || !camera) return;
            
            const time = Date.now() * 0.0001;
            
            // Calculate scroll-based transformation phases
            const scrollY = window.scrollY;
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = totalHeight > 0 ? Math.min(scrollY / totalHeight, 1) : 0;

            nebulaParticles.rotation.y = time * 0.2 + (mouseX * 0.0001);
            nebulaParticles.rotation.x = time * 0.1 + (mouseY * 0.0001);

            const currentPositions = nebulaParticles.geometry.attributes.position.array;
            const linePositions = weaverLines.geometry.attributes.position.array;
            
            // Phase 1: Chaos (0-25% scroll)
            const chaosStart = 0.05, chaosEnd = 0.25;
            weaverLines.material.opacity = scrollPercent > chaosEnd ? 0.5 : (scrollPercent > chaosStart ? ((scrollPercent - chaosStart) / (chaosEnd - chaosStart)) * 0.5 : 0);

            // Phase 2: Weaving (25-55% scroll)
            const weaveStart = 0.25, weaveEnd = 0.55;
            let weavePhasePercent = scrollPercent > weaveEnd ? 1 : (scrollPercent > weaveStart ? (scrollPercent - weaveStart) / (weaveEnd - weaveStart) : 0);
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                currentPositions[i * 3] = THREE.MathUtils.lerp(initialPositions[i * 3], targetPositions[i * 3], weavePhasePercent);
                currentPositions[i * 3 + 1] = THREE.MathUtils.lerp(initialPositions[i * 3 + 1], targetPositions[i * 3 + 1], weavePhasePercent);
                currentPositions[i * 3 + 2] = THREE.MathUtils.lerp(initialPositions[i * 3 + 2], targetPositions[i * 3 + 2], weavePhasePercent);
            }
            
            // Connect particles to center
            for(let i = 0; i < PARTICLE_COUNT; i++) {
                linePositions[i * 6] = currentPositions[i * 3];
                linePositions[i * 6 + 1] = currentPositions[i * 3 + 1];
                linePositions[i * 6 + 2] = currentPositions[i * 3 + 2];
                linePositions[i * 6 + 3] = 0; 
                linePositions[i * 6 + 4] = 0; 
                linePositions[i * 6 + 5] = 0;
            }
            weaverLines.geometry.attributes.position.needsUpdate = true;
            nebulaParticles.geometry.attributes.position.needsUpdate = true;

            // Phase 3: Zoom (55-70% scroll)
            const zoomStart = 0.55, zoomEnd = 0.7;
            let zoomPhasePercent = scrollPercent > zoomEnd ? 1 : (scrollPercent > zoomStart ? (scrollPercent - zoomStart) / (zoomEnd - zoomStart) : 0);
            camera.position.z = THREE.MathUtils.lerp(8, 4, zoomPhasePercent);

            // Phase 4: Climax (70-90% scroll) - Glowing sphere removed for better text readability
            const climaxStart = 0.7, climaxEnd = 0.9;
            let climaxPhasePercent = scrollPercent > climaxEnd ? 1 : (scrollPercent > climaxStart ? (scrollPercent - climaxStart) / (climaxEnd - climaxStart) : 0);
            
            const opacity = Math.sin(climaxPhasePercent * Math.PI);
            nebulaParticles.material.opacity = 0.7 * (1 - opacity);
            weaverLines.material.opacity = 0.5 * (1 - opacity);
            // Glowing sphere rendering removed - was making text hard to read
            // climaxObject.material.opacity = opacity;
            // climaxObject.material.emissiveIntensity = opacity * 2;
            // climaxObject.scale.setScalar(1 + Math.sin(time * 10) * 0.05 * opacity);
            
            renderer.render(scene, camera);
        } catch (error) {
            console.warn('Three.js render error:', error);
        }
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event) {
        mouseX = (event.clientX - window.innerWidth / 2);
        mouseY = (event.clientY - window.innerHeight / 2);
    }

    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);

    init();
    animate();
}

// Export for use in main app
window.KairosAnimation = {
    initializeCelestialWeaver
};