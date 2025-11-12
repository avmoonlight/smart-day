// ===== MODO ESCURO =====
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const icon = themeToggle.querySelector("i");
    icon.classList.toggle("bi-moon-fill");
    icon.classList.toggle("bi-sun-fill");
  });
}
