(function() {
    'use strict';

    /**
     * Unified Accordion Handler
     * Manages all accordion interactions across the entire site
     * Works with new .accordion__header structure and ARIA attributes
     */

    function initializeAccordions() {
        // Get all accordion headers
        const headers = document.querySelectorAll('.accordion__header');

        headers.forEach(header => {
            header.addEventListener('click', handleAccordionToggle);
            // Ensure buttons are properly typed
            if (header.tagName === 'BUTTON') {
                header.type = 'button';
            }
        });

        console.log(`✓ Accordion system initialized (${headers.length} accordions)`);
    }

    function handleAccordionToggle(event) {
        const header = event.currentTarget;
        const contentId = header.getAttribute('aria-controls');

        if (!contentId) return;

        const content = document.getElementById(contentId);
        if (!content) return;

        // Get current state
        const isExpanded = header.getAttribute('aria-expanded') === 'true';
        const newState = !isExpanded;

        // Update ARIA attributes
        header.setAttribute('aria-expanded', newState);
        content.setAttribute('aria-hidden', !newState);

        // Animate height change
        if (newState) {
            // Opening
            content.style.maxHeight = '0';
            content.style.opacity = '0';
            content.style.overflow = 'hidden';
            content.style.transition = 'max-height 0.3s ease-out, opacity 0.3s ease-out';

            // Trigger reflow to ensure transition works
            content.offsetHeight;

            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
        } else {
            // Closing
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';

            // Trigger reflow
            content.offsetHeight;

            content.style.maxHeight = '0';
            content.style.opacity = '0';
        }
    }

    /**
     * Public API for programmatically opening/closing accordions
     */
    window.AccordionAPI = {
        // Open a specific accordion by ID
        open: function(contentId) {
            const header = document.querySelector(`[aria-controls="${contentId}"]`);
            if (header && header.getAttribute('aria-expanded') !== 'true') {
                header.click();
            }
        },

        // Close a specific accordion by ID
        close: function(contentId) {
            const header = document.querySelector(`[aria-controls="${contentId}"]`);
            if (header && header.getAttribute('aria-expanded') === 'true') {
                header.click();
            }
        },

        // Toggle a specific accordion
        toggle: function(contentId) {
            const header = document.querySelector(`[aria-controls="${contentId}"]`);
            if (header) {
                header.click();
            }
        },

        // Close all accordions
        closeAll: function() {
            const headers = document.querySelectorAll('.accordion__header[aria-expanded="true"]');
            headers.forEach(header => header.click());
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeAccordions);
    } else {
        initializeAccordions();
    }
})();
