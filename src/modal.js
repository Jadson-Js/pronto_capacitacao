const coursesList = document.getElementById("coursesList");
const cards = document.querySelectorAll(".category");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");
const btnClose = document.getElementById("btnClose");

async function showCourses(categoryId) {
  try {
    const response = await fetch("/courses.json");
    const content = await response.json();
    const coursesContent = content[categoryId].courses;
    console.log(coursesContent);

    if (!Array.isArray(coursesContent)) {
      console.error(
        "Erro: O arquivo JSON não contém uma lista (array) de cursos.",
      );
      return;
    }

    coursesList.innerHTML = coursesContent
      // 1. Dê um nome para cada item do array (ex: 'course')
      .map((course) => {
        // 2. Use as propriedades de 'course' para preencher o HTML
        return `<li>
                  <div class="p-4 transition duration-300 border border-transparent rounded-lg cursor-pointer hover:bg-gray-100 hover:border-gray-200">
                    <a href="${course.whatsappLink}" target="_blank" rel="noopener noreferrer">
                      <p class="font-bold text-gray-900">${course.title}</p>
                      <p class="text-sm text-gray-600">${course.description}</p>
                    </a>
                  </div>
                </li>`;
      })
      .join("");
  } catch (error) {
    console.error("Falha ao buscar ou processar os cursos:", error);
    coursesList.innerHTML =
      "<li><p>Não foi possível carregar os cursos no momento.</p></li>";
  }
}

function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// A sua função modal já está correta!
function handleModal() {
  // Carrega os cursos antes de qualquer coisa

  cards.forEach((card, index) => {
    card.addEventListener("click", async function () {
      await showCourses(index);

      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
  });

  closeModalBtn.addEventListener("click", () => {
    closeModal();
  });

  modal.addEventListener("click", function (event) {
    // Fecha o modal APENAS se o clique for no elemento de fundo (o próprio modal)
    if (event.target === modal) {
      closeModal();
    }
  });
}

export { handleModal };
