// Interactive Hero Section Features
let clickCount = 0;
let particleCount = 0;
const maxParticles = 50;

function createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = x - 50 + 'px';
    ripple.style.top = y - 50 + 'px';
    ripple.style.width = '100px';
    ripple.style.height = '100px';

    document.querySelector('.hero').appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function createParticle() {
    if (particleCount >= maxParticles) return;

    const particle = document.createElement('div');

    // ランダムに花びらの形を選択
    const petalTypes = ['particle', 'particle petal-1', 'particle petal-2', 'particle petal-3'];
    const randomType = petalTypes[Math.floor(Math.random() * petalTypes.length)];

    particle.className = randomType;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 3 + 's';
    particle.style.animationDuration = (3 + Math.random() * 3) + 's';

    // ランダムにサイズを少し変更
    const size = 8 + Math.random() * 8; // 8px - 16px
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    document.getElementById('heroParticles').appendChild(particle);
    particleCount++;

    setTimeout(() => {
        particle.remove();
        particleCount--;
    }, 6000);
}

function toggleBackgroundColor() {
    const hero = document.querySelector('.hero');
    const joinButton = document.getElementById('heroJoinButton');

    hero.classList.add('red-background');
    joinButton.style.display = 'block';
    setTimeout(() => {
        joinButton.classList.add('show');
    }, 100);
}

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Hero click interaction
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('click', function(e) {
            // Create ripple effect at click position
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            createRipple(x, y);

            clickCount++;

            // After 3 clicks, change background to red and show JOIN button
            if (clickCount >= 3) {
                toggleBackgroundColor();
            }
        });
    }

    // Scroll interaction - create falling particles
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Only create particles when scrolling down in hero section
        if (scrollTop > lastScrollTop && scrollTop < window.innerHeight) {
            // 50% chance per scroll event, creates more petals
            if (Math.random() < 0.5) {
                createParticle();
            }
            // Sometimes create multiple petals at once
            if (Math.random() < 0.2) {
                createParticle();
                setTimeout(() => createParticle(), 100);
            }
        }

        lastScrollTop = scrollTop;
    });

    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');

    console.log('NavToggle found:', navToggle);
    console.log('NavMenu found:', navMenu);

    if (navToggle && navMenu) {
        function toggleMenu(e) {
            e.preventDefault();
            e.stopPropagation();

            console.log('Hamburger clicked/touched');

            const isActive = navMenu.classList.contains('nav__menu--active');
            console.log('Menu was active:', isActive);

            navMenu.classList.toggle('nav__menu--active');
            navToggle.classList.toggle('nav__toggle--active');

            console.log('Menu is now active:', navMenu.classList.contains('nav__menu--active'));
        }

        // Add both click and touch events for better mobile support
        navToggle.addEventListener('click', toggleMenu);
        navToggle.addEventListener('touchstart', toggleMenu);

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('nav__menu--active');
                navToggle.classList.remove('nav__toggle--active');
            }
        });
    } else {
        console.error('NavToggle or NavMenu not found!');
    }

    // Handle navigation links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only prevent default for same-page anchors (starting with #)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }

            // Always close mobile menu when a link is clicked
            navMenu.classList.remove('nav__menu--active');
            navToggle.classList.remove('nav__toggle--active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
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

    // Form handling (placeholder for future implementation)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            console.log('Form submitted');
        });
    });

    // CTA button tracking (for analytics)
    const ctaButtons = document.querySelectorAll('.btn--primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            console.log(`CTA clicked: ${buttonText}`);
            // Add analytics tracking here
        });
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Additional styles for animations
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