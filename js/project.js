// projects.js – Scroll-triggered animation and directional carousel scroll

// ======== 1. Animate header and wrapper on scroll ========
const projectHeader = document.querySelector(".projects-header");
const projectWrapper = document.querySelector(".projects-carousel-wrapper");

const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

if (projectHeader) observer.observe(projectHeader);
if (projectWrapper) observer.observe(projectWrapper);

// ======== 2. Auto-scroll on hover for each carousel ========
// projectScroll.js - Handles auto scroll on hover for all project carousels

// Create a Map to track individual intervals per carousel
const carouselScrollIntervals = new Map();

// Scroll function
function startAutoScroll(carousel, direction) {
  stopAutoScroll(carousel); // Clear any existing one

  const speed = 1.5;
  const scrollDirection = direction === "left" ? -speed : speed;

  const interval = setInterval(() => {
    carousel.scrollLeft += scrollDirection;
  }, 16);

  carouselScrollIntervals.set(carousel, interval);
}

// Stop scroll function
function stopAutoScroll(carousel) {
  if (carouselScrollIntervals.has(carousel)) {
    clearInterval(carouselScrollIntervals.get(carousel));
    carouselScrollIntervals.delete(carousel);
  }
}

// Setup all carousels
document.querySelectorAll(".project-carousel").forEach((carousel) => {
  const direction = carousel.dataset.direction || "left";

  carousel.addEventListener("mouseenter", () => {
    // Slight nudge to trigger scrolling context
    carousel.scrollBy({ left: direction === "left" ? -10 : 10, behavior: "smooth" });

    startAutoScroll(carousel, direction);
  });

  carousel.addEventListener("mouseleave", () => {
    stopAutoScroll(carousel);
  });
});

// ✅ Fix: Pre-scroll left-direction carousels slightly to the right on page load
window.addEventListener("load", () => {
  document.querySelectorAll('.project-carousel[data-direction="left"]').forEach(carousel => {
    carousel.scrollLeft = carousel.scrollWidth - carousel.clientWidth; // Ensures they can scroll "left" on hover
  });
});