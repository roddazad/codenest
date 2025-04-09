
// teamBanner.js – Scroll-triggered animation for Team Tablet Banner

const teamBanner = document.getElementById("team-banner-wrapper");
const teamHeading = document.getElementById("team-heading");

if (teamBanner) {
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const handleTeamScroll = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollingUp = currentScroll < lastScrollTop;

    const rect = teamBanner.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    if (inView) {
      teamBanner.classList.remove("active-scroll-up", "active-scroll-down");
      teamHeading.classList.remove("move-up", "move-down");

      if (isScrollingUp) {
        teamBanner.classList.add("active-scroll-up");
        teamHeading.classList.add("move-down");
      } else {
        teamBanner.classList.add("active-scroll-down");
        teamHeading.classList.add("move-up"); // Slide heading upward
      }
    } else {
      teamBanner.classList.remove("active-scroll-up", "active-scroll-down");
      teamHeading.classList.remove("move-up", "move-down");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  };

  window.addEventListener("scroll", handleTeamScroll);
  window.addEventListener("load", handleTeamScroll); // Trigger once on page load
}

