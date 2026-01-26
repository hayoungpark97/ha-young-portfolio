// Menú mobile
const btn = document.querySelector(".nav-toggle");
const menu = document.querySelector("#nav-menu");

if (btn && menu) {
    btn.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(isOpen));
        });
}

// Año automático en footer
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
