// meetTeam.js - Dedicated logic for Meet the Team tablet banner

// Set up IntersectionObserver for meet-team-section
// This handles scroll-triggered rise on entering viewport
// and prepares us to extend with scroll-up landing effect later

const meetTeamObserverOptions = {
    root: null,
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const meetTeamObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, meetTeamObserverOptions);
  
  // Observe the team section
  const meetTeamSection = document.querySelector(".meet-team-section");
  if (meetTeamSection) {
    meetTeamObserver.observe(meetTeamSection);
  }
  