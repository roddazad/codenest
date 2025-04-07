  // Fade in the slogan after page load
  window.addEventListener("load", function () {
    document.getElementById("slogan").classList.remove("opacity-0");
  });
  // Typewriter effect for slogan
const slogan = "Your Dream, Nested and Nurtured — with Code and Care";
const sloganElement = document.getElementById("slogan");
let charIndex = 0;

function typeSlogan() {
  if (charIndex < slogan.length) {
    sloganElement.textContent += slogan.charAt(charIndex);
    charIndex++;
    setTimeout(typeSlogan, 75); // ⌨️ typing speed (ms per character)
  }
}

// Wait for DOM to be ready
window.addEventListener("DOMContentLoaded", typeSlogan);