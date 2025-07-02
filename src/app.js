import { coursesData } from "./data.js";
const headlineElement = document.getElementById("headline");
const subHeadlineElement = document.getElementById("subheadline");
const illustrationHeroElement = document.getElementById("illustrationHero");
const btnCtaPrimary = document.querySelectorAll(".btn__cta--primary");
const btnCtaSecundary = document.querySelectorAll(".btn__cta--secundary");

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

    btnCtaPrimary.forEach((btn) => {
      btn.href = product.shopLink;
      btn.textContent = "Comprar agora";
    });

    btnCtaSecundary.forEach((btn) => {
      btn.classList.remove("hidden");
    });
  } else {
    headlineElement.textContent = "Produto Não Encontrado";
  }
}

export { loadProductData };
