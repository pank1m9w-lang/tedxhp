/**
 * Main application entry point
 * Orchestrates all client-side functionality
 */

import { initNavigation } from './navigation';
import { initAnimations } from './animations';

/**
 * Initializes all application features
 */
function initApp(): void {
  // Initialize navigation features
  initNavigation();

  // Initialize animations
  initAnimations();

  // Track CTA button clicks for analytics
  const ctaButtons = document.querySelectorAll('.btn--primary');
  ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonText = (button as HTMLElement).textContent?.trim();
      console.log(`CTA clicked: ${buttonText}`);
      // Add analytics tracking here (Google Analytics, etc.)
    });
  });

  // Handle form submissions
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Form submitted');
      // Add form submission logic here
    });
  });
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

export { initApp };
