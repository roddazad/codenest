// 🌟 Slogan Typewriter Effect
window.addEventListener("load", function () {
    document.getElementById("slogan").classList.remove("opacity-0");
  });
  
  const sloganElement = document.getElementById("slogan");
  const sloganText = "Your Dream, Nested and Nurtured — with Code and Care.";
  let index = 0;
  let isDeleting = false;
  
  function typeLoop() {
    if (!isDeleting && index <= sloganText.length) {
      sloganElement.textContent = sloganText.substring(0, index) + "_";
      index++;
      setTimeout(typeLoop, 60);
    } else if (isDeleting && index >= 0) {
      sloganElement.textContent = sloganText.substring(0, index) + "_";
      index--;
      setTimeout(typeLoop, 35);
    } else {
      isDeleting = !isDeleting;
      setTimeout(typeLoop, isDeleting ? 2000 : 1000);
    }
  }
  
  window.addEventListener("load", () => {
    typeLoop();
  });
  
  // 🌐 Navbar Scroll Effects
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");
  
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
    if (currentScroll > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  
    if (currentScroll > lastScrollTop && currentScroll > 100) {
      navbar.classList.add("navbar-hidden");
    } else if (currentScroll < lastScrollTop) {
      navbar.classList.remove("navbar-hidden");
    }
  
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
  
  // 🪄 Scroll Animations Using IntersectionObserver
  document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px 50% 0px",
      threshold: 0.2
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    document.querySelectorAll(
      ".projects-carousel-wrapper, .scroll-rise, .scroll-fade, .projects-title-block"
    ).forEach(item => observer.observe(item));
  });
  