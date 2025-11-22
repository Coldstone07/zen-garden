(function() {
    'use strict';

    /**
     * Modalities Renderer
     * Dynamically generates modality cards from data/modalities.json
     * Replaces hardcoded HTML with data-driven component system
     */

    async function loadAndRenderModalities() {
        try {
            // Fetch modalities data
            const response = await fetch('/data/modalities.json');
            if (!response.ok) throw new Error('Failed to load modalities data');
            const modalities = await response.json();

            // Find container
            const container = document.querySelector('[data-modalities-container]');
            if (!container) return;

            // Clear existing content
            container.innerHTML = '';

            // Render each modality
            modalities.forEach(modality => {
                const element = createModalityCard(modality);
                container.appendChild(element);
            });

            // Initialize accordion functionality
            initializeAccordions();

        } catch (error) {
            console.error('Error loading modalities:', error);
        }
    }

    function createModalityCard(modality) {
        const div = document.createElement('div');
        div.className = 'glass-panel glass-panel--large glass-panel--frosted';
        div.setAttribute('data-modality', modality.id);

        // Build expandable content HTML
        const contentSections = modality.expandableContent.sections
            .map(section => `
                <p class="mt-4"><strong>${section.heading}:</strong></p>
                <ul class="list-disc list-inside space-y-2 mt-2">
                    ${section.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `)
            .join('');

        div.innerHTML = `
            <h3>${modality.title}</h3>
            <p class="framework-label">${modality.question}</p>
            <p class="moonlight-secondary mb-4">${modality.intro}</p>
            <div class="accordion-example mb-4">
                <strong>Example:</strong> ${modality.example}
            </div>
            <p class="moonlight-secondary text-sm">
                <strong>Why it matters:</strong> ${modality.whyMatters}
            </p>
            <div class="accordion__item accordion__item--frosted mt-4">
                <button class="accordion__header" aria-expanded="false" aria-controls="${modality.id}-content">
                    <span class="accordion__title">${modality.learnMoreTitle}</span>
                    <span class="accordion__toggle accordion__toggle--chevron">▼</span>
                </button>
                <div class="accordion__content" id="${modality.id}-content" aria-hidden="true">
                    <div class="accordion__body">
                        <p><strong>${modality.expandableContent.title}:</strong> ${modality.expandableContent.description || 'Explore the deeper frameworks and principles.'}</p>
                        ${contentSections}
                    </div>
                </div>
            </div>
        `;

        return div;
    }

    function initializeAccordions() {
        const accordions = document.querySelectorAll('[data-modality] .accordion__header');

        accordions.forEach(header => {
            header.addEventListener('click', function() {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                const contentId = this.getAttribute('aria-controls');
                const content = document.getElementById(contentId);

                if (!content) return;

                // Toggle state
                this.setAttribute('aria-expanded', !isExpanded);
                content.setAttribute('aria-hidden', isExpanded);

                // Toggle content visibility with animation
                if (isExpanded) {
                    content.style.maxHeight = '0';
                    content.style.opacity = '0';
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.style.opacity = '1';
                }
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAndRenderModalities);
    } else {
        loadAndRenderModalities();
    }
})();
