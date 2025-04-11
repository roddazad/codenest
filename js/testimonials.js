document.addEventListener("DOMContentLoaded", () => {
    const testimonialCards = document.querySelectorAll('.scroll-fade-up');
  
    const observerOptions = {
      threshold: 0.2,
    };
  
    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    testimonialCards.forEach(card => {
      fadeObserver.observe(card);
    });
  });