import { smoothScrollAnimation } from "./smoothScrollAnimation.js";
import { hamburgerMenu } from "./hamburgerMenu.js";
import { faqAccordion } from "./faqAccordion.js";
import { handleModal } from "./handleModal.js";
import { loadProductData } from "./app.js";

document.addEventListener("DOMContentLoaded", () => {
  smoothScrollAnimation();
  hamburgerMenu();
  faqAccordion();
  handleModal();
});

window.onload = loadProductData;
