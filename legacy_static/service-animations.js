document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Momentum/Parallax Animation for Hero 3D Elements
    const heroVisual = document.querySelector('.hero-3d-scene');
    if (heroVisual) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = 0.15; // Adjustment for momentum speed

            // Apply parallax effect - moves slower than scroll
            heroVisual.style.transform = `translateY(${scrolled * rate}px)`;

            // Optional: Rotate slightly based on scroll
            // heroVisual.style.transform += ` rotateX(${scrolled * 0.02}deg)`;
        });
    }
});
