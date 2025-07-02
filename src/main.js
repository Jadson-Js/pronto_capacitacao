import { smoothScrollAnimation } from "./smoothScrollAnimation.js";
import { hamburgerMenu } from "./hamburgerMenu.js";
import { faqAccordion } from "./faqAccordion.js";
import { handleModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
  smoothScrollAnimation();
  hamburgerMenu();
  faqAccordion();
  handleModal();
});
