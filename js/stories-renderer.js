/**
 * Stories Renderer Module
 * Loads story data from JSON and renders story cards dynamically
 * Saves ~375 lines of HTML by replacing hardcoded cards with template-based rendering
 */

(function() {
  'use strict';

  // Initialize stories when document is ready
  function initializeStories() {
    loadAndRenderStories();
  }

  // Load stories from JSON and render them
  async function loadAndRenderStories() {
    try {
      const response = await fetch('./data/stories.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const stories = await response.json();
      renderStories(stories);
    } catch (error) {
      console.error('Error loading stories:', error);
      // Fallback: keep hardcoded stories visible if JSON fails to load
    }
  }

  // Render stories from data
  function renderStories(stories) {
    const container = document.querySelector('[data-stories-container]');
    if (!container) {
      console.warn('Stories container not found');
      return;
    }

    container.innerHTML = stories.map(story => createStoryCard(story)).join('');
  }

  // Create a single story card from data
  function createStoryCard(story) {
    const pronoun = ['jacqui', 'antonia'].includes(story.id) ? 'she' : 'he';

    return `
      <div class="glass-panel overflow-hidden rounded-lg fade-in story-profile-card">
        <!-- Photo Placeholder -->
        <div class="photo-placeholder bg-gradient-to-br from-moonlight-muted/30 to-moonlight-muted/10 w-full h-48 flex items-center justify-center border-b border-moonlight-primary/20">
          <div class="text-center">
            <span class="text-5xl">📸</span>
            <p class="text-xs moonlight-muted mt-2">${story.name}'s Photo</p>
          </div>
        </div>
        <!-- Content -->
        <div class="p-8">
          <div class="mb-6">
            <p class="text-lg moonlight-primary font-bold mb-2 leading-relaxed">
              "${story.quote}"
            </p>
            <p class="text-sm moonlight-muted uppercase tracking-widest font-semibold">${story.subtitle}</p>
          </div>
          <p class="moonlight-secondary leading-relaxed text-sm mb-4">
            ${story.story}
          </p>
          <div class="glass-subtle p-4 rounded text-xs moonlight-secondary">
            <strong>Today ${pronoun} can:</strong> ${story.outcome}
          </div>
        </div>
      </div>
    `;
  }

  // Expose to global scope for main.js to call
  window.StoriesRenderer = {
    initialize: initializeStories
  };

})();
