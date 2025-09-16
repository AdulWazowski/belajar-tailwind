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
let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 200) {
    // Scroll ke bawah → sembunyikan
    header.classList.remove("show");
    header.classList.add("hide");
  } else {
    // Scroll ke atas → tampilkan
    header.classList.remove("hide");
    header.classList.add("show");
  }

  lastScroll = currentScroll;
});
