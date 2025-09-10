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