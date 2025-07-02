function smoothScrollAnimation() {
  // 1. Seleciona todos os links do menu que apontam para âncoras (#)
  const menuLinks = document.querySelectorAll('header a[href^="#"]');

  // 2. Define a função que fará a rolagem
  function scrollToSection(event) {
    // 2.1. Previne o comportamento padrão do link
    event.preventDefault();

    // 2.2. Pega o ID da seção a partir do atributo href do link (ex: "#cursos")
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // 2.3. Se a seção de destino existir na página...
    if (targetSection) {
      // 2.4. Rola a página suavemente até o topo da seção
      targetSection.scrollIntoView({
        behavior: "smooth", // A mágica acontece aqui!
        block: "start", // Alinha o topo da seção com o topo da tela
      });
    }
  }

  // 3. Adiciona o "escutador de eventos" de clique a cada link do menu
  menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

export { smoothScrollAnimation };

// 4. Executa a função depois que a página inteira for carregada
