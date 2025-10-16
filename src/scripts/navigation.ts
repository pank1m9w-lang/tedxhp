/**
 * Navigation utilities
 * Handles header scroll effects and smooth scrolling
 */

/**
 * Initializes header scroll behavior (hide on scroll down, show on scroll up)
 */
export function initHeaderScroll(): void {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      (header as HTMLElement).style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      (header as HTMLElement).style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
  });
}

/**
 * Initializes smooth scrolling for anchor links
 */
export function initSmoothScroll(): void {
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute('href');

      // Only prevent default for same-page anchors (starting with #)
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          const header = document.querySelector('.header');
          const headerHeight = header ? (header as HTMLElement).offsetHeight : 0;
          const targetPosition = targetSection.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

/**
 * Sets active state for bottom navigation based on current path
 */
export function initBottomNavActiveState(): void {
  const bottomNavItems = document.querySelectorAll('.bottom-nav__item');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  bottomNavItems.forEach(item => {
    const itemHref = item.getAttribute('href');
    if (itemHref === currentPath || (currentPath === '' && itemHref === 'index.html')) {
      (item as HTMLElement).style.color = 'var(--tedx-red)';
    }
  });
}

/**
 * Main navigation initialization
 */
export function initNavigation(): void {
  initHeaderScroll();
  initSmoothScroll();
  initBottomNavActiveState();
}
