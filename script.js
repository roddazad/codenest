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

// Wait for DOM to be ready
window.addEventListener("DOMContentLoaded", typeSlogan);