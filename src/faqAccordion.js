// --- LÓGICA PARA O ACORDEÃO (FAQ) - COM ANIMAÇÃO DE SLIDE ---
function faqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-header");

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Fecha todos os outros itens para o efeito accordion
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
      });

      // Se o item clicado não estava ativo, abre-o
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

export { faqAccordion };
