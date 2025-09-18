// Hide & Show Header
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('headerr');
    let lastScrollTop = 0;
    const scrollThreshold = 250; // Point at which header starts to hide (in pixels)

    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
            // Scrolling down past threshold
            headerr.classList.remove('translate-y-0');
            headerr.classList.add('-translate-y-full');
        } else if (currentScroll < lastScrollTop && currentScroll <= scrollThreshold) {
            // Scrolling up and within threshold
            headerr.classList.remove('-translate-y-full');
            headerr.classList.add('translate-y-0');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
    });
});