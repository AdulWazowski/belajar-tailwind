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
  loadComponent("footer", "./layout/footer.html");

  loadComponent("hero-section", "./layout/hero-section.html");
  loadComponent("feature-section", "./components/feature-section.html");
  loadComponent("product-list", "./components/product-list.html");
  loadComponent("article-2-1", "./components/article-2-1.html");
});