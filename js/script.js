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

// Services Carousel Controls
const carousel = document.querySelector(".services-carousel-container");
const leftArrow = document.getElementById("carouselLeft");
const rightArrow = document.getElementById("carouselRight");

leftArrow.addEventListener("click", () => {
  carousel.scrollBy({ left: -450, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
  carousel.scrollBy({ left: 450, behavior: "smooth" });
});

// Navbar Scroll Effects
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Add class when scrolled down more than 50px
  if (currentScroll > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }

  // Hide navbar when scrolling down, show when scrolling up
  if (currentScroll > lastScrollTop && currentScroll > 100) {
    navbar.classList.add("navbar-hidden");
  } else if (currentScroll < lastScrollTop) {
    navbar.classList.remove("navbar-hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ----- Remove any previous scroll-event based animation code -----
// (The IntersectionObserver below is our only scroll-trigger now)

// ----- IntersectionObserver for Scroll-Triggered Animations -----
document.addEventListener("DOMContentLoaded", () => {
  // Adjust the observer options:
  // rootMargin: "0px 0px 100px 0px" expands the bottom of the viewport by 100px,
  // so the animation triggers even if the element is not fully visible.
  const observerOptions = {
    root: null,                   // Use the viewport as the root.
    rootMargin: "0px 0px 50% 0px",
    threshold: 0.2               // Trigger as soon as any pixel is visible.
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      // Debug (optional): Uncomment the line below to log when each element is observed
      // console.log(entry.target, "is intersecting:", entry.isIntersecting);
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Uncomment the next line if you want each element to animate only once:
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe all elements that should animate on scroll.
  // Adjust the selectors if needed so that the carousels or any other target elements are observed.
  document.querySelectorAll(".projects-carousel-wrapper, .scroll-rise, .scroll-fade, .projects-title-block").forEach(item => {
    observer.observe(item);
  });
});