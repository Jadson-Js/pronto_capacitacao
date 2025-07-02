import { coursesData } from "./data.js";

function findCourseById(courseId) {
  let foundCourse = null;
  coursesData.forEach((category) => {
    const course = category.courses.find((course) => course.id === courseId);
    if (course) foundCourse = course;
  });

  return foundCourse;
}

function loadProductData() {
  const path = window.location.pathname;

  const productId = path.split("/").pop();

  if (!productId) return;

  const product = findCourseById(productId);

  if (product) {
    document.getElementById("heroTitle").textContent = product.title;
  } else {
    document.getElementById("product-title").textContent =
      "Produto Não Encontrado";
    document.getElementById("product-description").textContent =
      "O produto que você está procurando não existe ou foi movido.";
  }
}

export { loadProductData };
