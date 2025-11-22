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

    // Accordion functionality moved to unified handler in /js/accordion.js
    // The AccordionAPI is available globally for programmatic control

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

    // Initialize adaptive contrast system - DISABLED for performance
    // This system was causing lag due to continuous DOM updates during scroll
    function initializeAdaptiveContrast() {
        // Disabled to improve performance - the continuous scroll monitoring
        // and DOM style updates were causing website lag
        return;
        
        /* Original code commented out:
        if (!KairosApp.features.animation) {
            // No need for adaptive contrast if animation is disabled
            return;
        }

        if (window.KairosAdaptiveContrast && typeof window.KairosAdaptiveContrast.initialize === 'function') {
            window.KairosAdaptiveContrast.initialize();
            console.log('✓ Adaptive contrast system initialized');
        } else {
            console.warn('Adaptive contrast system not available');
        }
        */
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

            // Accordion functionality initialized by unified /js/accordion.js handler

            // Initialize animation if supported
            initializeAnimation();

            // Initialize adaptive contrast (depends on animation)
            initializeAdaptiveContrast();

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