/**
 * Hero Section Interactive Features
 * Handles click interactions, particle effects, and background transitions
 */

interface HeroState {
  clickCount: number;
  particleCount: number;
  maxParticles: number;
}

const state: HeroState = {
  clickCount: 0,
  particleCount: 0,
  maxParticles: 50,
};

/**
 * Creates a ripple effect at the specified coordinates
 */
export function createRipple(x: number, y: number): void {
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  ripple.style.left = `${x - 50}px`;
  ripple.style.top = `${y - 50}px`;
  ripple.style.width = '100px';
  ripple.style.height = '100px';

  const hero = document.querySelector('.hero');
  hero?.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

/**
 * Creates a falling particle (petal) animation
 */
export function createParticle(): void {
  if (state.particleCount >= state.maxParticles) return;

  const particle = document.createElement('div');
  const petalTypes = ['particle', 'particle petal-1', 'particle petal-2', 'particle petal-3'];
  const randomType = petalTypes[Math.floor(Math.random() * petalTypes.length)];

  particle.className = randomType;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDelay = `${Math.random() * 3}s`;
  particle.style.animationDuration = `${3 + Math.random() * 3}s`;

  const size = 8 + Math.random() * 8;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  const heroParticles = document.getElementById('heroParticles');
  heroParticles?.appendChild(particle);
  state.particleCount++;

  setTimeout(() => {
    particle.remove();
    state.particleCount--;
  }, 6000);
}

/**
 * Toggles the hero background to red and shows JOIN button
 */
export function toggleBackgroundColor(): void {
  const hero = document.querySelector('.hero');
  const joinButton = document.getElementById('heroJoinButton');

  hero?.classList.add('red-background');

  if (joinButton) {
    joinButton.style.display = 'block';
    setTimeout(() => {
      joinButton.classList.add('show');
    }, 100);
  }
}

/**
 * Initializes hero click interactions
 */
export function initHeroClickInteraction(): void {
  const hero = document.querySelector('.hero');

  if (!hero) return;

  hero.addEventListener('click', (e: Event) => {
    const mouseEvent = e as MouseEvent;
    const rect = hero.getBoundingClientRect();
    const x = mouseEvent.clientX - rect.left;
    const y = mouseEvent.clientY - rect.top;

    createRipple(x, y);
    state.clickCount++;

    if (state.clickCount >= 3) {
      toggleBackgroundColor();
    }
  });
}

/**
 * Initializes scroll-based particle effects
 */
export function initScrollParticles(): void {
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Only create particles when scrolling down in hero section
    if (scrollTop > lastScrollTop && scrollTop < window.innerHeight) {
      if (Math.random() < 0.5) {
        createParticle();
      }
      if (Math.random() < 0.2) {
        createParticle();
        setTimeout(() => createParticle(), 100);
      }
    }

    lastScrollTop = scrollTop;
  });
}

/**
 * Main initialization function
 */
export function initHeroInteractions(): void {
  initHeroClickInteraction();
  initScrollParticles();
}
