// Fungsi load file HTML eksternal ke dalam elemen target
async function loadComponent(targetId, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Gagal load ${file}`);
    const html = await res.text();
    document.getElementById(targetId).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}


// Load header & footer
window.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "./layout/header.html");
  loadComponent("footer", "footer.html");
});


// Hide & Show Header
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('headerr');
    let lastScrollTop = 0;
    const scrollThreshold = 150; // Point at which header starts to hide (in pixels)

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