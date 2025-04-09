// =====================
// Projects Section Scroll & Animation Handling
// =====================

// IntersectionObserver Setup
const projectObserverOptions = {
    root: null,
    rootMargin: "0px 0px 50% 0px",
    threshold: 0.2
  };
  
  const projectObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  };
  
  const projectObserver = new IntersectionObserver(projectObserverCallback, projectObserverOptions);
  
  // Observe all scroll-animated elements for project section
  const projectTargets = document.querySelectorAll(
    ".projects-carousel-wrapper, .scroll-rise, .scroll-fade, .projects-title-block"
  );
  projectTargets.forEach(el => projectObserver.observe(el));
  
  // Optional future: Scroll behavior for swinging effect inside each carousel
  // Can be added later once design refined, e.g., swing cards toward scroll direction
  