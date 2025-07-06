const testimonials = document.querySelectorAll(".testimonial__item");

export function loadTestimonials(product) {
  testimonials.forEach((testimonial, index) => {
    const image = testimonial.querySelector(".testimonial__image");
    const name = testimonial.querySelector(".testimonial__name");
    const position = testimonial.querySelector(".testimonial__position");
    const text = testimonial.querySelector(".testimonial__text");

    image.src = product.testimonials[index].image;
    name.textContent = product.testimonials[index].name;
    position.textContent = product.testimonials[index].position;
    text.textContent = product.testimonials[index].text;
  });
}
