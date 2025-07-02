// --- LÓGICA PARA O MENU HAMBURGER (COM ANIMAÇÃO) ---
export function hamburgerMenu() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (hamburgerBtn && mobileMenu) {
    const mobileMenuLinks = mobileMenu.querySelectorAll(".mobile-link");

    const toggleMenu = () => {
      // Alterna as classes que controlam a visibilidade e posição
      mobileMenu.classList.toggle("opacity-0");
      mobileMenu.classList.toggle("opacity-100"); // Mostra/esconde o menu
      mobileMenu.classList.toggle("-translate-y-full");
      mobileMenu.classList.toggle("translate-y-0"); // Desliza o menu para dentro/fora da tela
      mobileMenu.classList.toggle("pointer-events-none");
      mobileMenu.classList.toggle("pointer-events-auto"); // Ativa/desativa os cliques
    };

    const closeMenu = () => {
      // Garante que o menu feche, adicionando as classes de "escondido"
      mobileMenu.classList.add(
        "opacity-0",
        "-translate-y-full",
        "pointer-events-none",
      );
      mobileMenu.classList.remove(
        "opacity-100",
        "translate-y-0",
        "pointer-events-auto",
      );
    };

    hamburgerBtn.addEventListener("click", toggleMenu);

    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }
}
