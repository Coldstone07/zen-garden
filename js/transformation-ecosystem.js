/**
 * Kairos Transformation Ecosystem Interactive Features
 * Handles the Energy-Information flow visualization and stream interactions
 */

function initializeTransformationEcosystem() {
    // Initialize particle system
    createParticleSystem();
    
    // Setup stream interactions
    setupStreamInteractions();
    
    // Initialize adaptive contrast system
    initializeAdaptiveContrast();
    
    // Setup scroll-based animations
    setupScrollAnimations();
    
    console.log('✓ Transformation Ecosystem initialized');
}

function createParticleSystem() {
    const ecosystemContainer = document.querySelector('.ecosystem-container');
    if (!ecosystemContainer) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'transformation-particles';
    ecosystemContainer.appendChild(particleContainer);
    
    const streamTypes = ['inner-wisdom', 'embodied-presence', 'conscious-relating', 'systemic-impact'];
    const streamPositions = [
        { start: { x: 20, y: 20 }, end: { x: 50, y: 50 } }, // Inner Wisdom -> Center
        { start: { x: 80, y: 20 }, end: { x: 50, y: 50 } }, // Embodied Presence -> Center
        { start: { x: 20, y: 80 }, end: { x: 50, y: 50 } }, // Conscious Relating -> Center
        { start: { x: 80, y: 80 }, end: { x: 50, y: 50 } }  // Systemic Impact -> Center
    ];
    
    streamTypes.forEach((streamType, index) => {
        createStreamParticles(particleContainer, streamType, streamPositions[index]);
    });
}

function createStreamParticles(container, streamType, position) {
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = `particle ${streamType}`;
        
        // Position particles along the path from stream to center
        const progress = i / particleCount;
        const startX = position.start.x + '%';
        const startY = position.start.y + '%';
        
        particle.style.left = startX;
        particle.style.top = startY;
        
        // Animate to center with staggered timing
        particle.style.animationDelay = `${i * 0.5}s`;
        particle.style.setProperty('--end-x', position.end.x + '%');
        particle.style.setProperty('--end-y', position.end.y + '%');
        
        container.appendChild(particle);
        
        // Animate particle movement
        animateParticleFlow(particle, position, i * 0.5);
    }
}

function animateParticleFlow(particle, position, delay) {
    const animate = () => {
        particle.style.transition = 'none';
        particle.style.left = position.start.x + '%';
        particle.style.top = position.start.y + '%';
        particle.style.opacity = '0';
        particle.style.transform = 'scale(0)';
        
        setTimeout(() => {
            particle.style.transition = 'all 3s cubic-bezier(0.4, 0, 0.2, 1)';
            particle.style.left = position.end.x + '%';
            particle.style.top = position.end.y + '%';
            particle.style.opacity = '1';
            particle.style.transform = 'scale(1)';
            
            setTimeout(() => {
                particle.style.opacity = '0';
                particle.style.transform = 'scale(0)';
            }, 2500);
        }, 100);
    };
    
    // Initial animation
    setTimeout(animate, delay * 1000);
    
    // Repeat animation
    setInterval(animate, 4000);
}

function setupStreamInteractions() {
    const streams = document.querySelectorAll('.transformation-stream');
    const hub = document.querySelector('.integration-hub');
    const energyFlows = document.querySelectorAll('.energy-flow');
    
    // Click-away dismissal for details panels
    document.addEventListener('click', (e) => {
        // Check if click is outside any transformation stream
        const clickedStream = e.target.closest('.transformation-stream');
        if (!clickedStream) {
            // Close all open details panels
            streams.forEach(stream => {
                stream.classList.remove('active');
                hideStreamDetails(stream);
            });
        }
    });
    
    streams.forEach((stream, index) => {
        stream.addEventListener('mouseenter', () => {
            // Highlight the specific energy flow
            energyFlows.forEach((flow, flowIndex) => {
                if (flowIndex === index) {
                    flow.style.opacity = '1';
                    flow.style.height = '4px';
                    flow.style.background = `linear-gradient(90deg, 
                        transparent 0%, 
                        rgba(200, 168, 130, 1) 20%, 
                        rgba(230, 208, 179, 1) 50%, 
                        rgba(200, 168, 130, 1) 80%, 
                        transparent 100%)`;
                } else {
                    flow.style.opacity = '0.3';
                }
            });
            
            // Enhance hub glow
            if (hub) {
                hub.style.filter = 'brightness(1.2) saturate(1.3)';
            }
            
            // Show detailed information
            showStreamDetails(stream, index);
        });
        
        stream.addEventListener('mouseleave', () => {
            // Reset energy flows
            energyFlows.forEach(flow => {
                flow.style.opacity = '';
                flow.style.height = '';
                flow.style.background = '';
            });
            
            // Reset hub
            if (hub) {
                hub.style.filter = '';
            }
            
            // Hide detailed information
            hideStreamDetails(stream);
        });
        
        // Add click interaction for mobile
        stream.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent document click listener
            const isActive = stream.classList.contains('active');
            
            // Remove active from all streams first
            streams.forEach(s => {
                s.classList.remove('active');
                hideStreamDetails(s);
            });
            
            if (!isActive) {
                stream.classList.add('active');
                showStreamDetails(stream, index, true);
            }
        });
    });
}

function showStreamDetails(stream, index, isPersistent = false) {
    const streamData = {
        0: { // Inner Wisdom
            title: "Inner Wisdom Stream",
            fullDescription: "Access your contemplative pathway to archetypal genius through Gene Keys transmission and heal fragmented inner parts using Internal Family Systems. Unlock the higher purpose hidden in your DNA through gentle, patient contemplation rather than aggressive analysis.",
            frameworks: ["Gene Keys", "IFS (Internal Family Systems)", "Shadow Work", "Archetypal Psychology", "Contemplative Practice"],
            benefits: ["Sacred context for life purpose", "Core motivation mapping", "Inner fragment healing", "Authentic blueprint access"]
        },
        1: { // Embodied Presence  
            title: "Embodied Presence Stream",
            fullDescription: "Cultivate interoceptive awareness and nervous system regulation through evidence-based somatic practices. Develop equanimity to sensation and moment-to-moment awareness using Vipassana mindfulness to embody transformation.",
            frameworks: ["Somatics", "Vipassana Mindfulness", "Breathwork", "Nervous System Regulation", "Interoception"],
            benefits: ["Embodied self-awareness", "Stress release", "Present-moment anchoring", "Autonomic regulation"]
        },
        2: { // Conscious Relating
            title: "Conscious Relating Stream", 
            fullDescription: "Transform ego patterns through psycho-spiritual Enneagram awareness and create coherent group dynamics using Prosocial frameworks. Move from unconscious reactivity to conscious relating through understanding core motivations and attachment patterns.",
            frameworks: ["Enneagram", "Prosocial", "Attachment Theory", "Relational Intelligence", "Group Dynamics"],
            benefits: ["Ego pattern recognition", "Unconscious motivation clarity", "Relational coherence", "Cultural space navigation"]
        },
        3: { // Systemic Impact
            title: "Systemic Impact Stream",
            fullDescription: "Navigate integral complexity through AQAL-informed leadership and generate collective transformation. Understand the Four Quadrants (I, We, It, Its) to create holistic interventions that avoid reductionism and address individual, cultural, and systemic dimensions.",
            frameworks: ["AQAL (All Quadrants, All Levels)", "Systems Thinking", "Integral Leadership", "Developmental Psychology", "Collective Intelligence"],
            benefits: ["Holistic perspective", "Systemic intervention design", "Leadership presence", "Collective transformation catalyst"]
        }
    };
    
    const data = streamData[index];
    if (!data) return;
    
    // Create or update details panel
    let detailsPanel = stream.querySelector('.stream-details-panel');
    if (!detailsPanel) {
        detailsPanel = document.createElement('div');
        detailsPanel.className = 'stream-details-panel';
        stream.appendChild(detailsPanel);
    }
    
    detailsPanel.innerHTML = `
        <div class="details-content">
            <h4 class="details-title">${data.title}</h4>
            <p class="details-description">${data.fullDescription}</p>
            <div class="details-frameworks">
                <strong>Core Frameworks:</strong>
                ${data.frameworks.map(fw => `<span class="framework-detail-tag">${fw}</span>`).join('')}
            </div>
            <div class="details-benefits">
                <strong>Key Benefits:</strong>
                <ul>
                    ${data.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    // Animate in
    requestAnimationFrame(() => {
        detailsPanel.style.opacity = '1';
        detailsPanel.style.transform = 'translateY(0)';
    });
    
    // Add persistent class for mobile
    if (isPersistent) {
        detailsPanel.classList.add('persistent');
    }
}

function hideStreamDetails(stream) {
    const detailsPanel = stream.querySelector('.stream-details-panel');
    if (detailsPanel) {
        // Remove persistent class and hide
        detailsPanel.classList.remove('persistent');
        detailsPanel.style.opacity = '0';
        detailsPanel.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            if (detailsPanel.parentNode) {
                detailsPanel.remove();
            }
        }, 300);
    }
}

function initializeAdaptiveContrast() {
    const floatingContents = document.querySelectorAll('.floating-content');
    let animationIntensity = 0;
    
    // Monitor Three.js animation intensity
    function updateAnimationIntensity() {
        // This would be called by the Three.js animation system
        // For now, we'll simulate based on scroll position
        const scrollY = window.scrollY;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = totalHeight > 0 ? Math.min(scrollY / totalHeight, 1) : 0;
        
        // Intensity increases with certain scroll phases
        if (scrollPercent > 0.05 && scrollPercent < 0.25) {
            animationIntensity = (scrollPercent - 0.05) / 0.2; // 0 to 1
        } else if (scrollPercent >= 0.25 && scrollPercent < 0.55) {
            animationIntensity = 1; // Full intensity during weaving phase
        } else if (scrollPercent >= 0.55) {
            animationIntensity = Math.max(0.3, 1 - ((scrollPercent - 0.55) / 0.45)); // Fade out
        } else {
            animationIntensity = 0;
        }
        
        // Apply contrast enhancement based on intensity
        floatingContents.forEach(content => {
            if (animationIntensity > 0.3) {
                content.classList.add('enhanced-contrast');
                
                // Add dynamic backdrop if it doesn't exist
                let backdrop = content.querySelector('.dynamic-backdrop');
                if (!backdrop) {
                    backdrop = document.createElement('div');
                    backdrop.className = 'dynamic-backdrop';
                    content.appendChild(backdrop);
                }
                
                // Adjust backdrop intensity
                const backdropOpacity = Math.min(animationIntensity, 1);
                backdrop.style.opacity = backdropOpacity;
            } else {
                content.classList.remove('enhanced-contrast');
            }
        });
    }
    
    // Update on scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateAnimationIntensity, 16); // 60fps
    });
    
    // Initial update
    updateAnimationIntensity();
}

function setupScrollAnimations() {
    const ecosystem = document.querySelector('.transformation-ecosystem');
    if (!ecosystem) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start ecosystem animations
                ecosystem.classList.add('active');
                
                // Stagger stream animations
                const streams = ecosystem.querySelectorAll('.transformation-stream');
                streams.forEach((stream, index) => {
                    setTimeout(() => {
                        stream.classList.add('animate-in');
                    }, index * 200);
                });
                
                // Start particle system
                const particles = ecosystem.querySelectorAll('.particle');
                particles.forEach((particle, index) => {
                    setTimeout(() => {
                        particle.style.animationPlayState = 'running';
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(ecosystem);
}

// Accessibility enhancements
function enhanceAccessibility() {
    const streams = document.querySelectorAll('.transformation-stream');
    
    streams.forEach((stream, index) => {
        // Add ARIA labels
        stream.setAttribute('role', 'button');
        stream.setAttribute('tabindex', '0');
        stream.setAttribute('aria-expanded', 'false');
        stream.setAttribute('aria-describedby', `stream-description-${index}`);
        
        // Add keyboard support
        stream.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                stream.click();
            }
        });
        
        stream.addEventListener('focus', () => {
            stream.style.outline = '3px solid var(--accent-interactive)';
            stream.style.outlineOffset = '4px';
        });
        
        stream.addEventListener('blur', () => {
            stream.style.outline = '';
            stream.style.outlineOffset = '';
        });
    });
    
    // Add screen reader descriptions for the visualization
    const hub = document.querySelector('.integration-hub');
    if (hub) {
        hub.setAttribute('aria-label', 'Central integration hub where all transformation streams converge into integrated wholeness');
    }
}

// Export for main app
window.KairosTransformationEcosystem = {
    initializeTransformationEcosystem,
    enhanceAccessibility
};