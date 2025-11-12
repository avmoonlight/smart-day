// ===== SCROLL NAV =====
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".main-nav");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
  } else {
    nav.style.boxShadow = "none";
  }
});
