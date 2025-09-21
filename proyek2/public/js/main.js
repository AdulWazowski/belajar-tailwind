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
  loadComponent("best-deals", "./components/best-deals.html");
  loadComponent("article-2-1", "./components/article-2-1.html");
  loadComponent("popular-categories", "./components/popular-categories.html");
  loadComponent("start-your-cart", "./components/start-your-cart.html");
  loadComponent("app-store", "./components/app-store.html");
  loadComponent("most-popular", "./components/most-popular.html");
  loadComponent("subscribe", "./components/subscribe.html");
});