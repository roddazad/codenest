// services.js

// Grab modal elements
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalDescription = document.getElementById("modal-description");
const modalFeatures = document.getElementById("modal-features");

// Service content
const serviceDetails = {
  webDevelopment: {
    category: "Website Design and Development",
    title: "Empower Your Online Presence",
    description: `
      At CodeNest, we don’t just build websites — we craft digital homes for your ideas.
      Whether you're launching a business or refreshing your brand, we turn your vision into a responsive, fast, and visually stunning website.
      Built for growth, optimized for experience.
    `,
    features: [
      "Custom design tailored to your story and goals",
      "Mobile-first, blazing-fast performance",
      "SEO-ready structure to help you rank",
      "Scalable, secure, and future-proofed code",
      "💬 Want to learn more?"
    ]
  },
  mobileDevelopment: {
    category: "Cross-Platform Mobile Development",
    title: "Unleash Innovation on Every Screen",
    description: `
      Your users are mobile — your solutions should be too.
      We develop modern, high-performance mobile apps that work flawlessly across iOS and Android.
      From MVPs to enterprise-grade platforms, we bring ideas to life in your user's palm.
    `,
    features: [
      "Cross-platform apps using React Native & Flutter",
      "Intuitive, clean user interfaces",
      "Full backend integrations & APIs",
      "App Store + Google Play publishing support",
      "💬 Want to learn more?"
    ]
  },
  uiUxDesign: {
    category: "User Interface / User Experience",
    title: "Designs That Move Hearts and Minds",
    description: `
      We believe in meaningful experiences. Our UI/UX approach blends functionality with beauty to build interfaces that are intuitive, delightful, and conversion-focused.
      Because good design isn’t just seen — it’s felt.
    `,
    features: [
      "Wireframing, prototyping, and user journey mapping",
      "High-fidelity Figma design systems",
      "Accessibility and UX best practices",
      "User testing + optimization loops",
      "💬 Want to learn more?"
    ]
  },
  eCommerce: {
    category: "Online Retail & Payment Integration",
    title: "Sell With Confidence and Style",
    description: `
      We turn online shops into seamless, secure buying experiences.
      Whether you're selling five items or five thousand, we create eCommerce solutions that scale and convert — with ease.
    `,
    features: [
      "Shopify, WooCommerce, or fully custom stores",
      "Smooth checkout flows and cart systems",
      "Stripe, PayPal, and payment gateway integration",
      "Inventory, shipping, and coupon systems",
      "💬 Want to learn more?"
    ]
  },
  digitalMarketingSEO: {
    category: "Digital Marketing and SEO",
    title: "Be Seen. Be Heard. Be Chosen.",
    description: `
      We help your brand rise through the noise.
      Our SEO and marketing strategies aren’t just about rankings — they’re about relationships.
      Let's get your message in front of the people who matter most.
    `,
    features: [
      "Technical SEO audits and fixes",
      "Keyword strategy and content calendars",
      "On-page & meta optimization",
      "Google Analytics + Search Console setup",
      "💬 Want to learn more?"
    ]
  },
  websiteManagement: {
    category: "Ongoing Website Support",
    title: "Peace of Mind, Every Day",
    description: `
      Websites shouldn’t feel like a second job. We handle the updates, backups, speed, and security while you focus on growing your dream.
      Your website deserves care — just like your business.
    `,
    features: [
      "Weekly backups + uptime monitoring",
      "Speed optimization and caching",
      "Security patches + firewall integration",
      "Monthly analytics reports and insights",
      "💬 Want to learn more?"
    ]
  },
  wordPressDevelopment: {
    category: "Custom WordPress Development",
    title: "Beautiful, Powerful WordPress Sites",
    description: `
      Fast to launch. Easy to manage. Fully custom.
      We create modern WordPress sites that are light, scalable, and pixel-perfect — without relying on bloated themes.
    `,
    features: [
      "Custom themes and lightweight templates",
      "Elementor, Gutenberg, or hand-coded",
      "Blog, portfolio, business & booking systems",
      "Training and documentation provided",
      "💬 Want to learn more?"
    ]
  },
  ai: {
    category: "AI Solutions & Automation",
    title: "Smarter, Faster, AI-Powered Workflows",
    description: `
      From chatbots to data-driven insights, we integrate AI into your business to save time, reduce error, and unlock new possibilities.
      Welcome to the future of your workflow.
    `,
    features: [
      "Custom chatbots and conversational AI",
      "Smart search, suggestions, and automation",
      "Data labeling, modeling, and integration",
      "AI-enhanced forms, tools, and dashboards",
      "💬 Want to learn more?"
    ]
  }
};

// Open modal on card click
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => {
    const service = card.dataset.service;
    const data = serviceDetails[service];

    if (data) {
      modalCategory.textContent = data.category;
      modalTitle.textContent = data.title;
      modalDescription.textContent = data.description;

      modalFeatures.innerHTML = "";
      data.features.forEach(feature => {
        const li = document.createElement("li");
        li.innerHTML = `<span class="text-warning">•</span> ${feature}`;
        modalFeatures.appendChild(li);
      });

      modal.classList.add("active");
    }
  });
});

// Close modal
document.querySelector(".close-modal-btn").addEventListener("click", () => {
  modal.classList.remove("active");
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});