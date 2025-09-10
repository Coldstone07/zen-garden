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