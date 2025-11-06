/**
 * Adaptive Text Contrast System
 * Dynamically adjusts text color based on background brightness during animations
 * Ensures optimal readability as bright elements move behind text content
 */

class AdaptiveContrast {
    constructor() {
        this.textElements = [];
        this.animationFrame = null;
        this.isActive = false;
        this.canvas = null;
        this.climaxIntensity = 0;
        this.init();
    }

    init() {
        // Select all text elements that need adaptive contrast
        const selectors = [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'p', 'span', 'li', 'a',
            '.moonlight-text',
            '.moonlight-secondary',
            '.moonlight-primary',
            '.cosmic-headline',
            '.phase-title',
            '.stream-title',
            '.cosmic-section-title'
        ];

        // Collect all text elements
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                if (!this.textElements.includes(el) && el.textContent.trim().length > 0) {
                    this.textElements.push(el);
                    // Store original styles
                    el.dataset.originalColor = window.getComputedStyle(el).color;
                    el.dataset.originalTextShadow = window.getComputedStyle(el).textShadow;
                }
            });
        });

        // Get canvas element
        this.canvas = document.getElementById('zen-garden-canvas');

        // Start monitoring scroll
        this.startMonitoring();

        // Handle window resize
        window.addEventListener('resize', () => {
            this.updateTextContrast();
        });
    }

    startMonitoring() {
        if (this.isActive) return;
        this.isActive = true;
        this.monitorScroll();
    }

    stopMonitoring() {
        this.isActive = false;
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }
    }

    monitorScroll() {
        if (!this.isActive) return;

        // Calculate scroll-based phases (matching three-animation.js)
        const scrollY = window.scrollY;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = totalHeight > 0 ? Math.min(scrollY / totalHeight, 1) : 0;

        // Climax phase: 70-90% scroll (when bright sphere appears)
        const climaxStart = 0.7;
        const climaxEnd = 0.9;

        if (scrollPercent >= climaxStart && scrollPercent <= climaxEnd) {
            // Calculate intensity (0 to 1) based on sine curve matching the animation
            const climaxPhasePercent = (scrollPercent - climaxStart) / (climaxEnd - climaxStart);
            this.climaxIntensity = Math.sin(climaxPhasePercent * Math.PI);
        } else {
            this.climaxIntensity = 0;
        }

        this.updateTextContrast();

        this.animationFrame = requestAnimationFrame(() => this.monitorScroll());
    }

    updateTextContrast() {
        // Get sphere position (center of screen during climax)
        const spherePosition = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            radius: 150 * (1 + this.climaxIntensity * 0.5) // Sphere grows during climax
        };

        this.textElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementCenter = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };

            // Calculate distance from element to sphere center
            const distance = Math.sqrt(
                Math.pow(elementCenter.x - spherePosition.x, 2) +
                Math.pow(elementCenter.y - spherePosition.y, 2)
            );

            // Calculate overlap intensity (1 = fully overlapping, 0 = no overlap)
            const maxInfluenceRadius = spherePosition.radius + 300; // Extended influence area
            let overlapIntensity = 0;

            if (distance < maxInfluenceRadius) {
                overlapIntensity = (1 - (distance / maxInfluenceRadius)) * this.climaxIntensity;
            }

            // Apply adaptive contrast based on overlap intensity
            this.applyContrast(element, overlapIntensity);
        });
    }

    applyContrast(element, intensity) {
        if (intensity > 0.1) {
            // High contrast mode: Dark text with strong white glow
            const contrastLevel = Math.min(intensity, 1);

            // Calculate contrast color (dark when bright background is behind)
            const darkIntensity = Math.floor(20 + contrastLevel * 30); // 20-50 range (very dark)
            const glowIntensity = contrastLevel * 0.9;
            const shadowSpread = 20 + contrastLevel * 40;

            // Apply dark text color with strong white glow
            element.style.color = `rgb(${darkIntensity}, ${darkIntensity}, ${Math.floor(darkIntensity * 1.1)})`;
            element.style.textShadow = `
                0 0 ${shadowSpread}px rgba(255, 255, 255, ${glowIntensity}),
                0 0 ${shadowSpread * 1.5}px rgba(255, 255, 255, ${glowIntensity * 0.8}),
                0 0 ${shadowSpread * 2}px rgba(255, 255, 255, ${glowIntensity * 0.6}),
                0 0 ${shadowSpread * 3}px rgba(200, 168, 130, ${glowIntensity * 0.4}),
                0 2px 4px rgba(255, 255, 255, ${glowIntensity * 0.5}),
                0 -2px 4px rgba(255, 255, 255, ${glowIntensity * 0.3})
            `;

            // Add strong backdrop for critical text elements
            if (element.tagName.match(/^H[1-3]$/)) {
                element.style.backdropFilter = `blur(${4 + contrastLevel * 8}px)`;
                element.style.webkitBackdropFilter = `blur(${4 + contrastLevel * 8}px)`;
                element.style.background = `radial-gradient(ellipse at center,
                    rgba(200, 168, 130, ${contrastLevel * 0.25}) 0%,
                    rgba(200, 168, 130, ${contrastLevel * 0.15}) 50%,
                    transparent 100%)`;
                element.style.borderRadius = '12px';
                element.style.padding = '0.5rem 1rem';
            }

            element.style.transition = 'color 0.3s ease-out, text-shadow 0.3s ease-out, background 0.3s ease-out';
            element.dataset.contrastApplied = 'true';
        } else {
            // Reset to original styles
            if (element.dataset.contrastApplied === 'true') {
                element.style.color = element.dataset.originalColor || '';
                element.style.textShadow = element.dataset.originalTextShadow || '';
                element.style.backdropFilter = '';
                element.style.webkitBackdropFilter = '';
                element.style.background = '';
                element.style.borderRadius = '';
                element.style.padding = '';
                element.dataset.contrastApplied = 'false';
            }
        }
    }

    // Public method to force update
    forceUpdate() {
        this.updateTextContrast();
    }

    // Destroy instance
    destroy() {
        this.stopMonitoring();
        this.textElements.forEach(element => {
            element.style.color = element.dataset.originalColor || '';
            element.style.textShadow = element.dataset.originalTextShadow || '';
            element.style.backdropFilter = '';
            element.style.webkitBackdropFilter = '';
            element.style.background = '';
            delete element.dataset.originalColor;
            delete element.dataset.originalTextShadow;
            delete element.dataset.contrastApplied;
        });
        this.textElements = [];
    }
}

// Initialize on page load
function initializeAdaptiveContrast() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            window.adaptiveContrast = new AdaptiveContrast();
        });
    } else {
        window.adaptiveContrast = new AdaptiveContrast();
    }
}

// Export for use in main app
window.KairosAdaptiveContrast = {
    initialize: initializeAdaptiveContrast,
    AdaptiveContrast
};
