import { coursesData } from "./data.js";

// --- Seletores dos Elementos ---
const coursesList = document.getElementById("coursesList");
const cards = document.querySelectorAll(".category");
const modal = document.getElementById("modal");
// Adicionado o seletor para o container interno do modal, que controla a animação de escala
const modalContainer = document.getElementById("modal-container");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalTitle = document.getElementById("modal-heading");

// --- Funções do Modal ---

/**
 * Carrega e exibe os cursos de uma categoria específica no modal.
 * Esta função permanece a mesma.
 */
function showCourses(categoryIndex) {
  try {
    const category = coursesData[categoryIndex];
    if (!category || !Array.isArray(category.courses)) {
      console.error("Dados dos cursos inválidos para o índice:", categoryIndex);
      return;
    }

    modalTitle.textContent = category.category;
    coursesList.innerHTML = category.courses
      .map(
        (course) => `
          <li class="flex items-center hover:bg-gray-100 p-2 rounded-lg">
            <svg class="w-6 h-6 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            <a href="${course.whatsappLink}" target="_blank" rel="noopener noreferrer" class="flex-1">
              <span class="font-semibold text-gray-800">${course.title}</span>
            </a>
          </li>
        `,
      )
      .join("");
  } catch (error) {
    console.error("Falha ao buscar ou processar os cursos:", error);
    coursesList.innerHTML =
      '<li><p class="text-red-500">Não foi possível carregar os cursos no momento.</p></li>';
  }
}

/**
 * ✨ NOVA FUNÇÃO PARA ABRIR O MODAL ✨
 * Remove as classes que o escondem e aciona a animação de entrada.
 */
function openModal() {
  modal.classList.remove("invisible", "opacity-0");
  modalContainer.classList.remove("scale-95");
}

/**
 * ✨ NOVA FUNÇÃO PARA FECHAR O MODAL ✨
 * Adiciona as classes de animação de saída.
 * Usa um setTimeout para esconder o modal de vez após a animação terminar.
 */
function closeModal() {
  modal.classList.add("opacity-0");
  modalContainer.classList.add("scale-95");

  // Espera a transição de 300ms do CSS terminar antes de adicionar 'invisible'
  setTimeout(() => {
    modal.classList.add("invisible");
  }, 300);
}

// --- Lógica Principal ---

/**
 * ✨ FUNÇÃO PRINCIPAL ATUALIZADA ✨
 * Configura todos os eventos de clique para abrir e fechar o modal.
 */
function handleModal() {
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      showCourses(index);
      openModal(); // Usa a nova função para abrir
    });
  });

  closeModalBtn.addEventListener("click", closeModal); // Usa a nova função para fechar

  // Fecha o modal ao clicar na área externa (overlay)
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(); // Usa a nova função para fechar
    }
  });

  // Fecha o modal ao pressionar a tecla "Escape"
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("invisible")) {
      closeModal();
    }
  });
}

export { handleModal };
