// Fade in the slogan after page load
window.addEventListener("load", function () {
  document.getElementById("slogan").classList.remove("opacity-0");
});
// Typewriter effect for slogan
const sloganElement = document.getElementById("slogan");
const sloganText = "Your Dream, Nested and Nurtured — with Code and Care.";
let index = 0;
let isDeleting = false;

function typeLoop() {
  if (!isDeleting && index <= sloganText.length) {
    sloganElement.textContent = sloganText.substring(0, index) + "_";
    index++;
    setTimeout(typeLoop, 60); // typing speed
  } else if (isDeleting && index >= 0) {
    sloganElement.textContent = sloganText.substring(0, index) + "_";
    index--;
    setTimeout(typeLoop, 35); // delete speed
  } else {
    isDeleting = !isDeleting;
    setTimeout(typeLoop, isDeleting ? 2000 : 1000); // pause before deleting or restarting
  }
}

window.addEventListener("load", () => {
  typeLoop();
});
const carousel = document.querySelector(".services-carousel-container");
const leftArrow = document.getElementById("carouselLeft");
const rightArrow = document.getElementById("carouselRight");

leftArrow.addEventListener("click", () => {
  carousel.scrollBy({ left: -450, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
  carousel.scrollBy({ left: 450, behavior: "smooth" });
});
document.addEventListener("DOMContentLoaded", () => {
  const scrollItems = document.querySelectorAll(".scroll-rise");

  const scrollTrigger = () => {
    scrollItems.forEach((item) => {
      const top = item.getBoundingClientRect().top;
      const winHeight = window.innerHeight;

      if (top < winHeight - 100) {
        item.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", scrollTrigger);
  scrollTrigger(); // trigger once on load
});
// 🪄 Scroll-triggered rise animation
function handleScrollAnimations() {
  const elements = document.querySelectorAll(".scroll-rise");
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimations);
window.addEventListener("load", handleScrollAnimations);
// Wait for DOM to be ready
window.addEventListener("DOMContentLoaded", typeSlogan);
