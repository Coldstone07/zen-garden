/* 
 * Kairos Path - Combined JavaScript
 * Generated: 2025-09-09T20:05:29.367Z
 * DO NOT EDIT - This file is auto-generated
 */

'use strict';

/* === js/three-animation.js === */
(function() {
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

    let scene, camera, renderer, nebulaParticles, weaverLines, climaxObject;
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

            const climaxGeometry = new THREE.SphereGeometry(1.5, 32, 32);
            const climaxMaterial = new THREE.MeshStandardMaterial({
                color: colorPrimaryAccent,
                emissive: colorPrimaryAccent,
                emissiveIntensity: 0,
                transparent: true,
                opacity: 0,
                blending: THREE.AdditiveBlending 
            });
            climaxObject = new THREE.Mesh(climaxGeometry, climaxMaterial);
            scene.add(climaxObject);
            
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

            // Phase 4: Climax (70-90% scroll)
            const climaxStart = 0.7, climaxEnd = 0.9;
            let climaxPhasePercent = scrollPercent > climaxEnd ? 1 : (scrollPercent > climaxStart ? (scrollPercent - climaxStart) / (climaxEnd - climaxStart) : 0);
            
            const opacity = Math.sin(climaxPhasePercent * Math.PI);
            nebulaParticles.material.opacity = 0.7 * (1 - opacity);
            weaverLines.material.opacity = 0.5 * (1 - opacity);
            climaxObject.material.opacity = opacity;
            climaxObject.material.emissiveIntensity = opacity * 2;
            
            climaxObject.scale.setScalar(1 + Math.sin(time * 10) * 0.05 * opacity);
            
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
})();

/* === js/interactions.js === */
(function() {
/**
 * Interactive Features and Micro-interactions
 * Handles scroll animations, form interactions, and component behaviors
 */

// Initialize animation system
function initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
        observer.observe(el);
    });
}

// AQAL Constellation Interactions
function initializeAQALConstellation() {
    const quadrantNodes = document.querySelectorAll('.quadrant-node');
    const connectionLines = document.querySelectorAll('.connection-line');
    const integrationCenter = document.querySelector('.integration-center');

    quadrantNodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            const quadrant = node.dataset.quadrant;
            
            // Highlight connections
            connectionLines.forEach(line => {
                line.style.opacity = '1';
                line.style.background = 'linear-gradient(90deg, transparent, rgba(200, 168, 130, 0.6), transparent)';
            });

            // Pulse center
            if (integrationCenter) {
                integrationCenter.style.transform = 'translate(-50%, -50%) scale(1.1)';
            }

            // Add subtle glow to other quadrants
            quadrantNodes.forEach(otherNode => {
                if (otherNode !== node) {
                    otherNode.style.opacity = '0.7';
                }
            });
        });

        node.addEventListener('mouseleave', () => {
            // Reset connections
            connectionLines.forEach(line => {
                line.style.opacity = '0.6';
                line.style.background = 'linear-gradient(90deg, transparent, rgba(200, 168, 130, 0.2), transparent)';
            });

            // Reset center
            if (integrationCenter) {
                integrationCenter.style.transform = 'translate(-50%, -50%) scale(1)';
            }

            // Reset other quadrants
            quadrantNodes.forEach(otherNode => {
                otherNode.style.opacity = '1';
            });
        });

        // Add click interaction for detailed view (future enhancement)
        node.addEventListener('click', () => {
            const quadrant = node.dataset.quadrant;
            console.log(`Quadrant ${quadrant} clicked - future: show detailed methodology`);
        });
    });

    // Center integration point interaction
    if (integrationCenter) {
        integrationCenter.addEventListener('mouseenter', () => {
            // Highlight all connections simultaneously
            connectionLines.forEach(line => {
                line.style.opacity = '1';
                line.style.background = 'linear-gradient(90deg, rgba(200, 168, 130, 0.3), rgba(200, 168, 130, 0.8), rgba(200, 168, 130, 0.3))';
            });

            // Enhance all quadrants
            quadrantNodes.forEach(node => {
                const star = node.querySelector('.star-rings');
                if (star) {
                    star.style.opacity = '1';
                    star.style.animation = 'pulse-rings 1.5s ease-in-out infinite';
                }
            });
        });

        integrationCenter.addEventListener('mouseleave', () => {
            // Reset all
            connectionLines.forEach(line => {
                line.style.opacity = '0.6';
                line.style.background = 'linear-gradient(90deg, transparent, rgba(200, 168, 130, 0.2), transparent)';
            });

            quadrantNodes.forEach(node => {
                const star = node.querySelector('.star-rings');
                if (star) {
                    star.style.opacity = '';
                    star.style.animation = '';
                }
            });
        });
    }
}

// SOPHISTICATED MICRO-INTERACTIONS
function initializeMicroInteractions() {
    // Enhanced hover effects
    const interactiveElements = document.querySelectorAll('.cosmic-button-primary, .cosmic-button-secondary, .quadrant-node, .journey-phase, .guide-profile');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            // Add sophisticated pulse effect
            element.style.filter = 'brightness(1.1) saturate(1.2)';
            element.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        element.addEventListener('mouseleave', (e) => {
            element.style.filter = '';
        });

        // Add click feedback
        element.addEventListener('click', (e) => {
            element.style.transform = 'scale(0.98)';
            setTimeout(() => {
                element.style.transform = '';
            }, 150);
        });
    });

    // Intelligent focus management for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach((element, index) => {
        element.addEventListener('focus', () => {
            // Add subtle glow indicator
            element.style.boxShadow = '0 0 0 3px rgba(200, 168, 130, 0.5), ' + (element.style.boxShadow || '');
        });

        element.addEventListener('blur', () => {
            // Remove focus glow
            const currentShadow = element.style.boxShadow || '';
            element.style.boxShadow = currentShadow.replace(/0 0 0 3px rgba\(200, 168, 130, 0\.5\),?\s?/, '');
        });
    });

    // Progressive disclosure for complex content
    const methodTags = document.querySelectorAll('.method-tag');
    methodTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            // Show enhanced tooltip information (future enhancement)
            tag.style.transform = 'scale(1.05)';
            tag.style.zIndex = '10';
        });

        tag.addEventListener('mouseleave', () => {
            tag.style.transform = '';
            tag.style.zIndex = '';
        });
    });
}

// Form handling
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    if (email && isValidEmail(email)) {
        // Add loading state
        form.classList.add('loading');
        
        // Simulate form submission
        setTimeout(() => {
            form.classList.remove('loading');
            form.reset();
            
            // Show success message with custom notification
            showNotification('Thank you! Your Blueprint Guide will be sent to your email within 24 hours.', 'success');
        }, 1000);
    } else {
        showNotification('Please enter a valid email address.', 'error');
    }
}

// Email validation function
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Enhanced notification system
function showNotification(message, type = 'success') {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto-hide after 4 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Smooth scroll for anchor links
function smoothScrollToAnchor(event) {
    const link = event.currentTarget;
    const targetId = link.getAttribute('href');
    
    if (targetId && targetId.startsWith('#')) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// Enhanced keyboard navigation
function initializeKeyboardNavigation() {
    // Add skip links for better accessibility
    const skipLink = document.querySelector('.skip-to-main');
    if (skipLink) {
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            const mainContent = document.querySelector('#main-content') || document.querySelector('main');
            if (mainContent) {
                mainContent.focus();
                mainContent.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Enhanced tab navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
        
        // Escape key to close modals/overlays
        if (e.key === 'Escape') {
            const overlay = document.querySelector('.exit-intent-overlay');
            if (overlay) {
                overlay.remove();
            }
        }
    });

    // Remove keyboard navigation class on mouse use
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Touch interaction improvements for mobile
function initializeTouchInteractions() {
    // Improve touch targets
    const touchElements = document.querySelectorAll('.cosmic-button-primary, .cosmic-button-secondary, .method-tag');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', () => {
            element.style.transform = 'scale(0.98)';
        }, { passive: true });
        
        element.addEventListener('touchend', () => {
            setTimeout(() => {
                element.style.transform = '';
            }, 150);
        }, { passive: true });
    });

    // Prevent zoom on double-tap for specific elements
    const noZoomElements = document.querySelectorAll('button, .cosmic-button-primary, .cosmic-button-secondary');
    noZoomElements.forEach(element => {
        element.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.target.click();
        });
    });
}

// Performance optimizations
function initializePerformanceOptimizations() {
    // Lazy load images when they come into view
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Handle resize-specific optimizations
            const isMobile = window.innerWidth <= 768;
            document.body.classList.toggle('mobile', isMobile);
        }, 250);
    });
}

// Export functions for main app
window.KairosInteractions = {
    initializeAnimations,
    initializeAQALConstellation,
    initializeMicroInteractions,
    initializeKeyboardNavigation,
    initializeTouchInteractions,
    initializePerformanceOptimizations,
    handleFormSubmit,
    smoothScrollToAnchor,
    showNotification
};
})();

/* === js/dynamic-content.js === */
(function() {
/**
 * Dynamic Content and Advanced Features
 * Handles scroll-based content adaptation and sophisticated user experience features
 */

// ADVANCED DYNAMIC CONTENT ADAPTATION
function initializeDynamicContent() {
    const heroTitle = document.querySelector('#hero-title');
    const sections = document.querySelectorAll('section');
    let currentPhase = 'chaos';

    function updateContentBasedOnScrollPhase(scrollPercent) {
        let newPhase = 'chaos';
        
        if (scrollPercent > 0.7) {
            newPhase = 'climax';
        } else if (scrollPercent > 0.25) {
            newPhase = 'integration';
        } else if (scrollPercent > 0.05) {
            newPhase = 'weaving';
        }

        if (newPhase !== currentPhase) {
            currentPhase = newPhase;
            
            // Update hero subtitle based on phase
            const heroSubtitle = document.querySelector('.floating-subtext');
            if (heroSubtitle) {
                const phaseMessages = {
                    'chaos': 'A revolutionary blueprint for conscious leaders—uniting trauma‑informed psychology, ancient wisdom and cutting‑edge science.',
                    'weaving': 'As patterns emerge from complexity, frameworks converge into systematic approaches for integrated development.',
                    'integration': 'Ancient wisdom and modern science unite in conscious leadership development for transformative impact.',
                    'climax': 'Integrated wholeness achieved through systematic approaches to consciousness, leadership, and collective healing.'
                };
                
                heroSubtitle.style.opacity = '0.7';
                setTimeout(() => {
                    heroSubtitle.innerHTML = `<p>${phaseMessages[newPhase]}</p>`;
                    heroSubtitle.style.opacity = '1';
                }, 300);
            }

            // Add phase-based visual effects
            document.body.setAttribute('data-scroll-phase', newPhase);
        }
    }

    // Monitor scroll for dynamic content updates
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const scrollY = window.scrollY;
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = totalHeight > 0 ? Math.min(scrollY / totalHeight, 1) : 0;
            
            updateContentBasedOnScrollPhase(scrollPercent);
        }, 100);
    });
}

// SCROLL PHASE SYNCHRONIZATION
function initializeScrollPhaseSync() {
    const sections = document.querySelectorAll('section');
    
    function syncContentWithAnimation() {
        const scrollY = window.scrollY;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = totalHeight > 0 ? Math.min(scrollY / totalHeight, 1) : 0;

        // Sync section visibility with animation phases
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionCenter = sectionTop + sectionHeight / 2;
            const viewportCenter = scrollY + window.innerHeight / 2;
            
            const distance = Math.abs(sectionCenter - viewportCenter);
            const maxDistance = window.innerHeight;
            const intensity = Math.max(0, 1 - distance / maxDistance);
            
            // Apply dynamic intensity effects
            const elements = section.querySelectorAll('.cosmic-bullet, .star-core, .node-core, .avatar-core');
            elements.forEach(element => {
                if (element.classList.contains('cosmic-bullet')) {
                    element.style.boxShadow = `0 0 ${10 + intensity * 20}px rgba(200, 168, 130, ${0.3 + intensity * 0.4})`;
                } else {
                    const currentShadow = element.style.boxShadow || '';
                    if (currentShadow.includes('rgba(200, 168, 130')) {
                        const baseIntensity = 0.6;
                        const dynamicIntensity = baseIntensity + intensity * 0.4;
                        element.style.boxShadow = currentShadow.replace(/rgba\(200, 168, 130, [0-9.]+\)/, `rgba(200, 168, 130, ${dynamicIntensity})`);
                    }
                }
            });
        });
    }

    // Optimize scroll listener with throttling
    let animationFrame;
    window.addEventListener('scroll', () => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
        animationFrame = requestAnimationFrame(syncContentWithAnimation);
    });
}

// ADVANCED CONVERSION OPTIMIZATION
function initializeAdvancedConversionOptimization() {
    // Intelligent engagement tracking
    let engagementScore = 0;
    let timeOnPage = Date.now();
    let scrollDepth = 0;
    let interactionCount = 0;

    // Track sophisticated user behavior patterns
    function trackEngagement(eventType, value = 1) {
        interactionCount++;
        engagementScore += value;
        
        // High-engagement triggers for sophisticated prospects
        if (engagementScore > 15 && interactionCount > 8) {
            // Show enhanced value proposition for highly engaged users
            enhanceValueProposition();
        }
    }

    function enhanceValueProposition() {
        const blueprintSection = document.querySelector('#blueprint');
        if (blueprintSection && !blueprintSection.hasAttribute('data-enhanced')) {
            blueprintSection.setAttribute('data-enhanced', 'true');
            
            // Add sophisticated social proof for high-engagement users
            const socialProof = document.createElement('div');
            socialProof.className = 'social-proof-banner fade-in';
            socialProof.innerHTML = `
                <div class="proof-content">
                    <span class="proof-icon">⚡</span>
                    <span class="proof-text">Join 200+ conscious leaders who've activated integrated wholeness through evidence-based methodologies.</span>
                </div>
            `;
            
            blueprintSection.insertBefore(socialProof, blueprintSection.firstChild);
            
            // Add sophisticated urgency for high-IQ prospects
            const urgencyElement = document.querySelector('.form-help');
            if (urgencyElement) {
                urgencyElement.innerHTML = 'Limited cohort for Q1 2025. Early access includes 1:1 strategy session with methodology architects.';
            }
        }
    }

    // Track AQAL constellation interactions (indicates sophisticated interest)
    document.addEventListener('click', (e) => {
        if (e.target.closest('.quadrant-node')) {
            trackEngagement('methodology-exploration', 3);
        }
        if (e.target.closest('.journey-phase')) {
            trackEngagement('journey-exploration', 2);
        }
        if (e.target.closest('.guide-profile')) {
            trackEngagement('authority-validation', 2);
        }
    });

    // Track scroll depth for engagement scoring
    window.addEventListener('scroll', () => {
        const currentScrollDepth = Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight), 1);
        if (currentScrollDepth > scrollDepth) {
            scrollDepth = currentScrollDepth;
            if (scrollDepth > 0.7) {
                trackEngagement('deep-engagement', 2);
            }
        }
    });

    // Intelligent exit-intent for sophisticated prospects
    let exitIntentTriggered = false;
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY <= 0 && !exitIntentTriggered && engagementScore > 8) {
            exitIntentTriggered = true;
            showIntelligentExitIntent();
        }
    });

    function showIntelligentExitIntent() {
        // Create sophisticated exit-intent overlay
        const exitOverlay = document.createElement('div');
        exitOverlay.className = 'exit-intent-overlay';
        exitOverlay.innerHTML = `
            <div class="exit-intent-content glass-panel">
                <h3 class="exit-title">Ready for Systematic Transformation?</h3>
                <p class="exit-description">
                    Since you've explored our methodology in depth, you clearly value evidence-based approaches. 
                    Get priority access to our limited Q1 cohort.
                </p>
                <div class="exit-actions">
                    <a href="mailto:hello@kairospatj.com" class="cosmic-button-primary">
                        Priority Access - Discovery Call
                    </a>
                    <button class="cosmic-button-secondary" onclick="this.closest('.exit-intent-overlay').remove()">
                        Continue Exploring
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(exitOverlay);
        
        // Auto-remove after 10 seconds if no action
        setTimeout(() => {
            if (exitOverlay.parentNode) {
                exitOverlay.remove();
            }
        }, 10000);
    }

    // Time-based engagement enhancement
    setTimeout(() => {
        if (engagementScore > 5) {
            // Add credibility enhancer for engaged users
            const methodologySection = document.querySelector('#methodology .methodology-evidence');
            if (methodologySection) {
                methodologySection.innerHTML = `
                    <p class="text-sm moonlight-muted italic">
                        Framework rigorously developed through MIT & Harvard research, validated through Google Research methodologies, 
                        and proven with 200+ high-achieving conscious leaders. <strong>Results-driven approach</strong> for systematic transformation.
                    </p>
                `;
            }
        }
    }, 30000); // After 30 seconds of engagement
}

// PROGRESSIVE WEB APP FEATURES
function initializeProgressiveFeatures() {
    // Service worker registration for offline capability
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(error => {
            console.warn('Service Worker registration failed:', error);
        });
    }

    // Install prompt for PWA
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Show custom install prompt for engaged users
        setTimeout(() => {
            showInstallPrompt();
        }, 60000); // After 1 minute
    });

    function showInstallPrompt() {
        if (deferredPrompt) {
            const installBanner = document.createElement('div');
            installBanner.className = 'install-banner';
            installBanner.innerHTML = `
                <div class="install-content">
                    <span>Install Kairos Path for offline access</span>
                    <button class="install-button cosmic-button-secondary" onclick="installApp()">Install</button>
                    <button class="dismiss-button" onclick="this.closest('.install-banner').remove()">×</button>
                </div>
            `;
            
            document.body.appendChild(installBanner);
        }
    }

    window.installApp = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((result) => {
                if (result.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                }
                deferredPrompt = null;
                document.querySelector('.install-banner')?.remove();
            });
        }
    };
}

// ANALYTICS AND INSIGHTS
function initializeAnalytics() {
    // Custom event tracking (privacy-focused)
    function trackEvent(eventName, eventData = {}) {
        // Only track if user hasn't opted out
        if (localStorage.getItem('analytics-opted-out') !== 'true') {
            console.log('Event tracked:', eventName, eventData);
            
            // Here you would send to your analytics service
            // Example: gtag('event', eventName, eventData);
        }
    }

    // Track meaningful interactions
    document.addEventListener('click', (e) => {
        if (e.target.closest('.cosmic-button-primary')) {
            trackEvent('cta_click', { button: 'primary', section: getSection(e.target) });
        }
        if (e.target.closest('.quadrant-node')) {
            trackEvent('methodology_interest', { quadrant: e.target.closest('.quadrant-node').dataset.quadrant });
        }
    });

    // Track scroll milestones
    let scrollMilestones = [25, 50, 75, 90];
    window.addEventListener('scroll', () => {
        const scrollPercent = Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight), 1) * 100;
        
        scrollMilestones = scrollMilestones.filter(milestone => {
            if (scrollPercent >= milestone) {
                trackEvent('scroll_milestone', { percent: milestone });
                return false; // Remove from array
            }
            return true;
        });
    });

    function getSection(element) {
        const section = element.closest('section');
        return section ? section.id || section.className : 'unknown';
    }
}

// USER PREFERENCES AND ACCESSIBILITY
function initializeUserPreferences() {
    // Dark/light mode toggle (if needed)
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Reduced motion preference handling
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        document.body.classList.add('reduce-motion');
    }

    // High contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    if (prefersHighContrast.matches) {
        document.body.classList.add('high-contrast');
    }

    // Font size preferences
    function adjustFontSize(scale) {
        document.documentElement.style.fontSize = `${16 * scale}px`;
        localStorage.setItem('font-scale', scale.toString());
    }

    // Load saved preferences
    const savedFontScale = localStorage.getItem('font-scale');
    if (savedFontScale) {
        adjustFontSize(parseFloat(savedFontScale));
    }
}

// Export functions for main app
window.KairosDynamicContent = {
    initializeDynamicContent,
    initializeScrollPhaseSync,
    initializeAdvancedConversionOptimization,
    initializeProgressiveFeatures,
    initializeAnalytics,
    initializeUserPreferences
};
})();

/* === js/main.js === */
(function() {
/**
 * Main Application Entry Point
 * Coordinates all functionality and initializes the Kairos Path landing page
 */

(function() {
    'use strict';

    // Application state
    const KairosApp = {
        initialized: false,
        features: {
            animation: true,
            interactions: true,
            dynamicContent: true,
            analytics: true
        }
    };

    // Feature detection and capability assessment
    function assessCapabilities() {
        const capabilities = {
            webgl: !!window.WebGLRenderingContext,
            intersectionObserver: !!window.IntersectionObserver,
            serviceWorker: 'serviceWorker' in navigator,
            reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
            isMobile: /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent),
            isHighEnd: window.innerWidth > 1024 && !(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent))
        };

        // Adjust features based on capabilities
        if (capabilities.reducedMotion || !capabilities.webgl) {
            KairosApp.features.animation = false;
        }

        if (!capabilities.intersectionObserver) {
            // Fallback for older browsers
            console.warn('IntersectionObserver not supported, using fallback animations');
        }

        return capabilities;
    }

    // Initialize core functionality
    function initializeCore() {
        // Basic animations and interactions
        if (window.KairosInteractions) {
            window.KairosInteractions.initializeAnimations();
            window.KairosInteractions.initializeMicroInteractions();
            window.KairosInteractions.initializeKeyboardNavigation();
            
            if ('ontouchstart' in window) {
                window.KairosInteractions.initializeTouchInteractions();
            }
            
            window.KairosInteractions.initializePerformanceOptimizations();
        }

        // AQAL constellation interactions
        if (window.KairosInteractions) {
            window.KairosInteractions.initializeAQALConstellation();
        }

        console.log('✓ Core functionality initialized');
    }

    // Initialize enhanced features
    function initializeEnhancedFeatures() {
        if (!KairosApp.features.dynamicContent) return;

        if (window.KairosDynamicContent) {
            window.KairosDynamicContent.initializeDynamicContent();
            window.KairosDynamicContent.initializeScrollPhaseSync();
            window.KairosDynamicContent.initializeAdvancedConversionOptimization();
            window.KairosDynamicContent.initializeUserPreferences();
            
            if (KairosApp.features.analytics) {
                window.KairosDynamicContent.initializeAnalytics();
            }
        }

        console.log('✓ Enhanced features initialized');
    }

    // Initialize Three.js animation
    function initializeAnimation() {
        if (!KairosApp.features.animation) {
            console.log('⚠ Animation disabled due to user preferences or device capabilities');
            return;
        }

        if (window.KairosAnimation && typeof window.KairosAnimation.initializeCelestialWeaver === 'function') {
            window.KairosAnimation.initializeCelestialWeaver();
            console.log('✓ Three.js animation initialized');
        } else {
            console.warn('Three.js animation not available');
        }
    }

    // Setup event listeners
    function setupEventListeners() {
        // Form submissions
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', window.KairosInteractions?.handleFormSubmit || handleFormFallback);
        });

        // Smooth scroll for anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', window.KairosInteractions?.smoothScrollToAnchor || smoothScrollFallback);
        });

        // Error handling
        window.addEventListener('error', (event) => {
            console.error('Application error:', event.error);
            // Could send to error reporting service
        });

        // Unhandled promise rejections
        window.addEventListener('unhandledrejection', (event) => {
            console.error('Unhandled promise rejection:', event.reason);
        });

        console.log('✓ Event listeners setup complete');
    }

    // Fallback functions for when modules aren't loaded
    function handleFormFallback(event) {
        event.preventDefault();
        const form = event.target;
        const email = form.querySelector('input[type="email"]')?.value;
        
        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Thank you! Your Blueprint Guide will be sent to your email within 24 hours.');
            form.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    }

    function smoothScrollFallback(event) {
        const link = event.currentTarget;
        const targetId = link.getAttribute('href');
        
        if (targetId && targetId.startsWith('#')) {
            event.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    // Performance monitoring
    function monitorPerformance() {
        // Monitor Core Web Vitals
        if ('web-vitals' in window) {
            // This would require importing web-vitals library
            // getCLS(console.log);
            // getFID(console.log);
            // getLCP(console.log);
        }

        // Monitor loading performance
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`Page loaded in ${Math.round(loadTime)}ms`);
            
            // Track if animations are impacting performance
            if (performance.getEntriesByType) {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData && perfData.loadEventEnd - perfData.navigationStart > 3000) {
                    console.warn('Slow page load detected, consider disabling animations');
                }
            }
        });
    }

    // Graceful degradation handler
    function handleDegradation(error, feature) {
        console.warn(`Feature '${feature}' failed to initialize:`, error);
        
        // Disable the feature that failed
        KairosApp.features[feature] = false;
        
        // Show user-friendly message if critical features fail
        if (feature === 'core') {
            const fallbackMessage = document.createElement('div');
            fallbackMessage.className = 'fallback-message';
            fallbackMessage.innerHTML = `
                <div class="fallback-content">
                    <p>Some advanced features couldn't load, but the site is still fully functional.</p>
                    <button onclick="this.parentNode.parentNode.remove()">Dismiss</button>
                </div>
            `;
            document.body.appendChild(fallbackMessage);
        }
    }

    // Main initialization function
    function initialize() {
        if (KairosApp.initialized) {
            console.warn('Application already initialized');
            return;
        }

        console.log('🚀 Initializing Kairos Path Application...');

        try {
            // Assess device capabilities
            const capabilities = assessCapabilities();
            console.log('Device capabilities:', capabilities);

            // Initialize core features
            initializeCore();

            // Setup event listeners
            setupEventListeners();

            // Initialize animation if supported
            initializeAnimation();

            // Initialize enhanced features
            initializeEnhancedFeatures();

            // Start performance monitoring
            monitorPerformance();

            KairosApp.initialized = true;
            console.log('✅ Kairos Path Application initialized successfully');

            // Dispatch custom event for other scripts
            document.dispatchEvent(new CustomEvent('kairos:initialized', {
                detail: { capabilities, features: KairosApp.features }
            }));

        } catch (error) {
            console.error('Failed to initialize application:', error);
            handleDegradation(error, 'core');
        }
    }

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        // DOM already loaded
        initialize();
    }

    // Expose app instance for debugging
    window.KairosApp = KairosApp;

    // Expose public API
    window.Kairos = {
        initialize,
        getFeatures: () => ({ ...KairosApp.features }),
        isInitialized: () => KairosApp.initialized
    };

})();
})();

