const coursesSection = document.getElementById("courses");
const courseSection = document.getElementById("course");
const courseTitle = document.getElementById("courseTitle");
const courseDescription = document.getElementById("courseDescription");
const courseImage = document.getElementById("courseImage");
const courseWorkload = document.getElementById("courseWorkload");
const courseModules = document.getElementById("courseModules");
const courseValidity = document.getElementById("courseValidity");
const courseModulesList = document.getElementById("courseModulesList");

export function loadCourse(product) {
  coursesSection.classList.add("hidden");
  courseSection.classList.remove("hidden");
  courseTitle.textContent = product.title;
  courseDescription.textContent = product.description;
  courseImage.src = product.courseImage;
  courseWorkload.textContent = product.workload;
  courseModules.textContent = product.modules.length;
  courseValidity.textContent = product.validity;

  courseModulesList.innerHTML = product.modules
    .map((module) => {
      return ` <li class="flex gap-x-3">
                <svg class="h-7 w-5 flex-none text-secundary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                ${module}
              </li>`;
    })
    .join("");
}
