/**
 * Animation utilities using Intersection Observer
 */

/**
 * Initializes fade-in animations for sections
 */
export function initSectionAnimations(): void {
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe sections for animation
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });
}

/**
 * Initializes lazy loading for images
 */
export function initLazyLoading(): void {
  const images = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const dataSrc = img.getAttribute('data-src');

        if (dataSrc) {
          img.src = dataSrc;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  images.forEach(img => {
    imageObserver.observe(img);
  });
}

/**
 * Adds animation styles to the page
 */
export function injectAnimationStyles(): void {
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 1;
      transform: translateY(0);
    }

    section {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease;
    }

    .lazy {
      opacity: 0;
      transition: opacity 0.3s;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Main animations initialization
 */
export function initAnimations(): void {
  initSectionAnimations();
  initLazyLoading();
  injectAnimationStyles();
}
