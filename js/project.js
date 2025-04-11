// projects.js – Scroll-triggered animation and directional carousel scroll

// ======== 1. Animate header and wrapper on scroll ========
const projectHeader = document.querySelector(".projects-header");
const projectWrapper = document.querySelector(".corner-slide");

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
  stopAutoScroll(carousel); // Reset first

  const speed = 10.5;
  const scrollAmount = direction === "left" ? -speed : speed;
  const maxScroll = carousel.scrollWidth;

  const interval = setInterval(() => {
    carousel.scrollLeft += scrollAmount;

    // If scrolled past clones, reset to real content
    if (direction === "right" && carousel.scrollLeft >= maxScroll - carousel.clientWidth) {
      carousel.scrollLeft = 1;
    } 
    else if (direction === "left" && carousel.scrollLeft <= 0) {
      carousel.scrollLeft = maxScroll - carousel.clientWidth - 1;
    }
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

  // 1️⃣ Clone the first few cards and append to the end
  const cards = Array.from(carousel.children);
  const numClones = 4; // You can change how many to clone
  cards.slice(0, numClones).forEach(card => {
    const clone = card.cloneNode(true);
    clone.classList.add("cloned-card");
    carousel.appendChild(clone);
  });

// 3️⃣ Start auto-scroll immediately
startAutoScroll(carousel, direction);

carousel.addEventListener("mouseenter", () => {
  stopAutoScroll(carousel);
});

carousel.addEventListener("mouseleave", () => {
  startAutoScroll(carousel, direction);
});
});

// ✅ Fix: Pre-scroll left-direction carousels slightly to the right on page load
window.addEventListener("load", () => {
  document.querySelectorAll('.project-carousel[data-direction="left"]').forEach(carousel => {
    carousel.scrollLeft = carousel.scrollWidth - carousel.clientWidth; // Ensures they can scroll "left" on hover
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in-section');

  const appearOptions = {
    threshold: 0.15, // The section is considered visible when 15% is in the viewport
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      // Add the 'visible' class to trigger CSS transition
      entry.target.classList.add('visible');
      // Stop observing once it’s visible (optional, but efficient)
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});

// projects-arrows.js — Handle arrow-based scrolling

document.querySelectorAll(".carousel-arrows").forEach((arrowGroup) => {
  const leftArrow = arrowGroup.querySelector(".carousel-arrow.left");
  const rightArrow = arrowGroup.querySelector(".carousel-arrow.right");
  const carouselName = leftArrow.dataset.carousel;
  const targetCarousel = document.querySelector(`.project-carousel[data-carousel="${carouselName}"]`);

  if (!targetCarousel) return;

  const scrollAmount = 800; // your card width

  leftArrow.addEventListener("click", () => {
    targetCarousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  rightArrow.addEventListener("click", () => {
    targetCarousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});
// Assume we have stopAutoScroll(carousel) and startAutoScroll(carousel, direction)
      // from your projects.js code.
      
      document.querySelectorAll(".carousel-arrow").forEach((arrowButton) => {
        arrowButton.addEventListener("click", () => {
          const isLeft = arrowButton.classList.contains("left");
          const carouselName = arrowButton.dataset.carousel;
          const carousel = document.querySelector(`.project-carousel[data-carousel="${carouselName}"]`);
          if (!carousel) return;
      
          // 1) Pause auto-scrolling immediately.
          stopAutoScroll(carousel);
      
          // 2) Perform the manual arrow scroll
          const firstCard = carousel.querySelector(".project-card");
          if (!firstCard) return;
      
          const cardWidth = firstCard.offsetWidth;
          const step = cardWidth + 20;
      
          carousel.scrollBy({
            left: isLeft ? -step : step,
            behavior: "smooth",
          });
      
          // 3) Optionally, resume auto-scrolling after a short delay
          const direction = carousel.dataset.direction || "left";
      
          // E.g. after 2 seconds, resume
          setTimeout(() => {
            startAutoScroll(carousel, direction);
          }, 2000);
        });
      });