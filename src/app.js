import { coursesData } from "./data.js";
import { loadProblemCards } from "./problemCards.js";
import { loadSolutionCards } from "./solutionCards.js";
import { loadCourse } from "./loadCourse.js";

const headlineElement = document.getElementById("headline");
const subHeadlineElement = document.getElementById("subheadline");
const illustrationHeroElement = document.getElementById("illustrationHero");
const btnCtaPrimary = document.querySelectorAll(".btn__cta--primary");
const btnCtaSecundary = document.querySelectorAll(".btn__cta--secundary");
const ctaHeadingElement = document.getElementById("cta-heading");
const btnCtaFinal = document.getElementById("btnCtaFinal");

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
    headlineElement.textContent = product.headline;
    subHeadlineElement.textContent = product.subHeadline;
    illustrationHeroElement.src = product.heroImage;
    problemHeadingElement.textContent = product.problemHeading;
    ctaHeadingElement.textContent = product.ctaHeading;

    btnCtaPrimary.forEach((btn) => {
      btn.href = product.storeLink;
      btn.textContent = "Comprar agora";
    });

    btnCtaSecundary.forEach((btn) => {
      btn.classList.remove("hidden");
      btn.href = product.whatsappLink;
    });

    btnCtaFinal.textContent = "GARANTIR MEU CERTIFICADO VÁLIDO";
    btnCtaFinal.href = product.storeLink;

    loadProblemCards(product);
    loadSolutionCards(product);
    loadCourse(product);
  } else {
    headlineElement.textContent = "Produto Não Encontrado";
  }
}

export { loadProductData };
