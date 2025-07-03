// --- SELETORES DO DOM ---
const coursesSection = document.getElementById("courses");
const courseSection = document.getElementById("course");
const courseTitle = document.getElementById("courseTitle");
const courseDescription = document.getElementById("courseDescription");
const courseImage = document.getElementById("courseImage");
const courseWorkload = document.getElementById("courseWorkload");
const courseModules = document.getElementById("courseModules");
const courseModulesList = document.getElementById("courseModulesList");
const toggleButtonContainer = document.getElementById("toggleButtonContainer");
let toggleModulesBtn = document.getElementById("toggleModulesBtn");

// --- FUNÇÃO PRINCIPAL ---
export function loadCourse(product) {
  // 1. Preenche as informações básicas do curso
  coursesSection.classList.add("hidden");
  courseSection.classList.remove("hidden");
  courseTitle.textContent = product.title;
  courseDescription.textContent = product.description;
  courseImage.src = product.courseImage;
  courseImage.onerror = () => {
    courseImage.src =
      "https://placehold.co/600x400/cccccc/ffffff?text=Imagem+Indisponível";
  };
  courseWorkload.textContent = product.workload;
  courseModules.textContent = product.modules.length - 1;

  // 2. Lógica do "Ver mais" com ANIMAÇÃO
  const INITIAL_VISIBLE_MODULES = 4;
  let isExpanded = false;

  // **MUDANÇA PRINCIPAL**: Renderiza TODOS os módulos de uma vez.
  // A visibilidade será controlada apenas pelo CSS (max-height).
  courseModulesList.innerHTML = product.modules
    .map((module) => {
      return `
                       <li class="flex gap-x-3 items-start">
                         <svg class="h-7 w-5 flex-none text-secundary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                         </svg>
                         <span>${module}</span>
                       </li>`;
    })
    .join("");

  // 3. Gerenciamento do botão e evento de clique
  // Clonar o botão continua a ser uma boa prática para evitar múltiplos listeners.
  const newBtn = toggleModulesBtn.cloneNode(true);
  toggleModulesBtn.parentNode.replaceChild(newBtn, toggleModulesBtn);
  toggleModulesBtn = newBtn;

  // Define a altura aproximada para a lista recolhida (2 linhas de itens)
  const collapsedHeight = "120px";

  // 4. Lógica inicial de exibição
  if (product.modules.length <= INITIAL_VISIBLE_MODULES) {
    // Se há poucos módulos, não precisa do botão nem do limite de altura.
    toggleButtonContainer.style.display = "none";
    courseModulesList.style.maxHeight = null;
  } else {
    // Se há muitos módulos, mostra o botão e recolhe a lista.
    toggleButtonContainer.style.display = "block";
    courseModulesList.style.maxHeight = collapsedHeight;
    toggleModulesBtn.textContent = "Ver mais";

    // Adiciona o evento para animar a altura
    toggleModulesBtn.addEventListener("click", () => {
      isExpanded = !isExpanded;
      if (isExpanded) {
        // Expande: define a altura máxima para a altura total do conteúdo.
        courseModulesList.style.maxHeight =
          courseModulesList.scrollHeight + "px";
        toggleModulesBtn.textContent = "Ver menos";
      } else {
        // Recolhe: volta para a altura inicial definida.
        courseModulesList.style.maxHeight = collapsedHeight;
        toggleModulesBtn.textContent = "Ver mais";
      }
    });
  }
}
