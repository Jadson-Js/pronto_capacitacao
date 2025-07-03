import { coursesData } from "./data.js";
const headlineElement = document.getElementById("headline");
const subHeadlineElement = document.getElementById("subheadline");
const illustrationHeroElement = document.getElementById("illustrationHero");
const btnCtaPrimary = document.querySelectorAll(".btn__cta--primary");
const btnCtaSecundary = document.querySelectorAll(".btn__cta--secundary");

const problemCard1 = document.getElementById("problemCard1");
const problemCard2 = document.getElementById("problemCard2");
const problemCard3 = document.getElementById("problemCard3");

const problemHeadingElement = document.getElementById("problem-heading");

function findCourseByNr(courseNr) {
  let foundCourse = null;
  coursesData.forEach((category) => {
    const course = category.courses.find((course) => course.nr === courseNr);
    if (course) foundCourse = course;
  });

  return foundCourse;
}

function loadProductData() {
  const path = window.location.pathname;
  const productId = path.split("/").pop();
  if (!productId) return;

  const product = findCourseByNr(productId);

  if (product) {
    headlineElement.textContent = product.title;
    subHeadlineElement.textContent = product.subHeadline;
    illustrationHeroElement.src = product.hero_image;
    problemHeadingElement.textContent = product.problemHeading;

    btnCtaPrimary.forEach((btn) => {
      btn.href = product.shopLink;
      btn.textContent = "Comprar agora";
    });

    btnCtaSecundary.forEach((btn) => {
      btn.classList.remove("hidden");
    });

    problemCard1.querySelector("h3").innerText = "Portas Fechadas no Mercado";
    problemCard1.querySelector(
      "p",
    ).innerText = `Empresas sérias exigem a certificação ${product.nr.toUpperCase()}. Sem ela, seu currículo é descartado para as melhores vagas antes mesmo da entrevista.`;
    problemCard1.querySelector("div").querySelector("img").src =
      "/public/illustration_3.svg";

    problemCard2.querySelector("h3").innerText = "Risco Real de Acidente Grave";
    problemCard2.querySelector(
      "p",
    ).innerText = `Sem o preparo correto é arriscar sua vida todos os dias. Uma acidente pode encerrar sua carreira e trazer consequências trágicas para você e sua família.`;

    problemCard3.querySelector("h3").innerText = "Ficar para Trás na Carreira";
    problemCard3.querySelector(
      "p",
    ).innerText = `Enquanto colegas certificados em ${product.nr.toUpperCase()} são promovidos e pegam os melhores projetos, você fica estagnado, limitado a trabalhos mais simples e com salários menores.`;
    problemCard3.querySelector("div").querySelector("img").src =
      "/public/illustration_4.svg";
  } else {
    headlineElement.textContent = "Produto Não Encontrado";
  }
}

export { loadProductData };
