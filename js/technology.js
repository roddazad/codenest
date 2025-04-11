// =====================================
// 🌐 Technology Data (Extended Set)
// =====================================

const technologies = [
    {
      name: "HTML5",
      logo: "https://cdn.simpleicons.org/html5/E34F26",
      description:
        "The foundational markup language of the web, used to structure content and define semantic meaning on webpages."
    },
    {
      name: "CSS3",
      logo: "https://cdn.simpleicons.org/css3/1572B6",
      description:
        "A styling language used to create visually engaging and responsive layouts for websites and applications."
    },
    {
      name: "JavaScript",
      logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
      description:
        "A dynamic scripting language that enables interactive features and complex behavior on websites."
    },
    {
      name: "TypeScript",
      logo: "https://cdn.simpleicons.org/typescript/3178C6",
      description:
        "A typed superset of JavaScript that helps catch errors early and improves developer productivity."
    },
    {
      name: "Sass",
      logo: "https://cdn.simpleicons.org/sass/CC6699",
      description:
        "A powerful CSS preprocessor that enables nesting, variables, mixins, and better code organization."
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      description:
        "A utility-first CSS framework that helps build custom designs directly in your markup."
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.simpleicons.org/bootstrap/7952B3",
      description:
        "A front-end toolkit for developing responsive, mobile-first websites using pre-built components."
    },
    {
      name: "jQuery",
      logo: "https://cdn.simpleicons.org/jquery/0769AD",
      description:
        "A fast, small JavaScript library that simplifies DOM manipulation, event handling, and Ajax."
    },
    {
      name: "JSON",
      logo: "https://cdn.simpleicons.org/json/000000",
      description:
        "A lightweight data-interchange format that is easy for humans to read and write."
    },
    {
      name: "Git",
      logo: "https://cdn.simpleicons.org/git/F05032",
      description:
        "A version control system that allows teams to track code changes and collaborate efficiently."
    },
    {
      name: "GitHub",
      logo: "https://cdn.simpleicons.org/github/181717",
      description:
        "A platform for hosting, sharing, and collaborating on Git repositories in the cloud."
    },
    {
      name: "Markdown",
      logo: "https://cdn.simpleicons.org/markdown/000000",
      description:
        "A lightweight markup language used for formatting readme files, documentation, and writing content."
    },
    {
      name: "Figma",
      logo: "https://cdn.simpleicons.org/figma/F24E1E",
      description:
        "A cloud-based design and prototyping tool used for UI/UX workflows and collaborative design."
    },
    {
      name: "Canva",
      logo: "https://cdn.simpleicons.org/canva/00C4CC",
      description:
        "An online design tool for creating social graphics, presentations, and visual content."
    },
    {
      name: "NPM",
      logo: "https://cdn.simpleicons.org/npm/CB3837",
      description:
        "The default package manager for Node.js, used to install and manage JavaScript dependencies."
    },
    {
      name: "ESLint",
      logo: "https://cdn.simpleicons.org/eslint/4B32C3",
      description:
        "A tool for identifying and fixing problems in JavaScript and TypeScript code."
    },
    {
      name: "Prettier",
      logo: "https://cdn.simpleicons.org/prettier/F7B93E",
      description:
        "An opinionated code formatter that ensures consistent style across codebases."
    },
    {
      name: "Postman",
      logo: "https://cdn.simpleicons.org/postman/FF6C37",
      description:
        "An API testing and development tool for making HTTP requests and managing environments."
    },
    {
      name: "Netlify",
      logo: "https://cdn.simpleicons.org/netlify/00C7B7",
      description:
        "A cloud platform for deploying and hosting static websites and JAMstack projects."
    },
    {
      name: "Vercel",
      logo: "https://cdn.simpleicons.org/vercel/000000",
      description:
        "A platform for frontend developers, designed to deploy sites with great performance and ease."
    },
    {
      name: "Render",
      logo: "https://cdn.simpleicons.org/render/46E3B7",
      description:
        "A unified cloud platform to build and run all your apps and websites."
    },
    {
      name: "MongoDB",
      logo: "https://cdn.simpleicons.org/mongodb/47A248",
      description:
        "A NoSQL database known for its scalability, flexibility, and JSON-like document structure."
    },
    {
      name: "MySQL",
      logo: "https://cdn.simpleicons.org/mysql/4479A1",
      description:
        "A widely used open-source relational database management system (RDBMS)."
    },
    {
      name: "SQLite",
      logo: "https://cdn.simpleicons.org/sqlite/003B57",
      description:
        "A self-contained, serverless SQL database engine ideal for mobile and embedded applications."
    },
    {
      name: "Supabase",
      logo: "https://cdn.simpleicons.org/supabase/3FCF8E",
      description:
        "An open-source Firebase alternative that provides a backend as a service with PostgreSQL."
    },
    {
      name: "Firebase",
      logo: "https://cdn.simpleicons.org/firebase/FFCA28",
      description:
        "A platform by Google for building mobile and web apps with real-time databases and hosting."
    },
    {
      name: "REST API",
      logo: "https://cdn.simpleicons.org/swagger/85EA2D",
      description:
        "An architectural style for designing networked applications using standard HTTP methods."
    },
    {
      name: "GraphQL",
      logo: "https://cdn.simpleicons.org/graphql/E10098",
      description:
        "A query language for APIs and runtime for executing those queries with your existing data."
    },
    {
      name: "JWT",
      logo: "https://cdn.simpleicons.org/jsonwebtokens/000000",
      description:
        "A compact, URL-safe means of representing claims to be transferred between two parties."
    },
    {
      name: "OAuth",
      logo: "https://cdn.simpleicons.org/auth0/EB5424",
      description:
        "An open standard for access delegation, commonly used for token-based authentication."
    },
    {
      name: "Bash",
      logo: "https://cdn.simpleicons.org/gnubash/4EAA25",
      description:
        "A command-line interpreter used for system administration, scripting, and automation."
    },
    {
      name: "Linux",
      logo: "https://cdn.simpleicons.org/linux/000000",
      description:
        "An open-source operating system widely used in servers, embedded systems, and development."
    },
    {
      name: "Chrome DevTools",
      logo: "https://cdn.simpleicons.org/googlechrome/4285F4",
      description:
        "A set of web developer tools built directly into the Google Chrome browser."
    },
    {
      name: "Yarn",
      logo: "https://cdn.simpleicons.org/yarn/2C8EBB",
      description:
        "A package manager that doubles down as a project manager with workspaces, caching, and fast installs."
    },
    {
      name: "Vite",
      logo: "https://cdn.simpleicons.org/vite/646CFF",
      description:
        "A frontend build tool that significantly improves the performance and experience of development."
    }
  ];

// =====================
// 💠 Top 30 Frameworks with Descriptions & Logos
// =====================

const frameworks = [
    {
      name: "React",
      logo: "https://cdn.simpleicons.org/react/61DAFB",
      description: "A JavaScript library for building interactive user interfaces by Facebook."
    },
    {
      name: "Vue.js",
      logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
      description: "The Progressive JavaScript Framework for building UI on the web."
    },
    {
      name: "Angular",
      logo: "https://cdn.simpleicons.org/angular/DD0031",
      description: "A platform for building web applications using TypeScript and modular components."
    },
    {
      name: "Svelte",
      logo: "https://cdn.simpleicons.org/svelte/FF3E00",
      description: "A compiler-based framework that turns components into highly efficient JavaScript."
    },
    {
      name: "Next.js",
      logo: "https://cdn.simpleicons.org/nextdotjs/000000",
      description: "The React framework for production – static & server-rendered apps."
    },
    {
      name: "Gatsby",
      logo: "https://cdn.simpleicons.org/gatsby/663399",
      description: "React-based framework for building fast static websites and apps."
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      description: "A utility-first CSS framework for rapidly building modern UI."
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.simpleicons.org/bootstrap/7952B3",
      description: "A responsive CSS framework with pre-built components and grid layout system."
    },
    {
      name: "Material UI",
      logo: "https://cdn.simpleicons.org/mui/007FFF",
      description: "React UI library following Google’s Material Design principles."
    },
    {
      name: "Express",
      logo: "https://cdn.simpleicons.org/express/000000",
      description: "Fast, minimalist web framework for Node.js applications."
    },
    {
      name: "NestJS",
      logo: "https://cdn.simpleicons.org/nestjs/E0234E",
      description: "Progressive Node.js framework for building efficient, scalable server-side applications."
    },
    {
      name: "Laravel",
      logo: "https://cdn.simpleicons.org/laravel/FF2D20",
      description: "PHP framework for building elegant web applications with MVC architecture."
    },
    {
      name: "Django",
      logo: "https://cdn.simpleicons.org/django/092E20",
      description: "Python web framework for building secure and maintainable websites."
    },
    {
      name: "Flask",
      logo: "https://cdn.simpleicons.org/flask/000000",
      description: "Lightweight Python web framework for building simple or complex APIs."
    },
    {
      name: "Spring Boot",
      logo: "https://cdn.simpleicons.org/spring/6DB33F",
      description: "Java-based framework used to create microservices and enterprise apps."
    },
    {
      name: "FastAPI",
      logo: "https://cdn.simpleicons.org/fastapi/009688",
      description: "High-performance web framework for building APIs with Python 3.6+ based on standard type hints."
    },
    {
      name: "jQuery",
      logo: "https://cdn.simpleicons.org/jquery/0769AD",
      description: "A fast, small, and feature-rich JavaScript library."
    },
    {
      name: "Electron",
      logo: "https://cdn.simpleicons.org/electron/47848F",
      description: "Build cross-platform desktop apps with JavaScript, HTML, and CSS."
    },
    {
      name: "Capacitor",
      logo: "https://cdn.simpleicons.org/ionic/3880FF",
      description: "Native runtime for building Web Native apps using JavaScript."
    },
    {
      name: "Cordova",
      logo: "https://cdn.simpleicons.org/apachecordova/E8E8E8",
      description: "Mobile development framework for building native apps using web technologies."
    },
    {
      name: "Expo",
      logo: "https://cdn.simpleicons.org/expo/000020",
      description: "Framework and platform for universal React applications."
    },
    {
      name: "Quasar",
      logo: "https://cdn.simpleicons.org/quasar/1976D2",
      description: "Vue-based framework for building responsive apps and websites."
    },
    {
      name: "Blazor",
      logo: "https://cdn.simpleicons.org/blazor/512",
      description: "Framework for building interactive client-side web UI with .NET."
    },
    {
      name: "Ember.js",
      logo: "https://cdn.simpleicons.org/emberdotjs/E04E39",
      description: "Framework for building ambitious web applications."
    },
    {
      name: "Alpine.js",
      logo: "https://cdn.simpleicons.org/alpinedotjs/8BC0D0",
      description: "Lightweight framework for adding interactivity to HTML."
    },
    {
      name: "Meteor",
      logo: "https://cdn.simpleicons.org/meteor/DE4F4F",
      description: "Full-stack platform for building real-time web and mobile apps."
    },
    {
      name: "SolidJS",
      logo: "https://cdn.simpleicons.org/solid/2C4F7C",
      description: "Declarative and efficient UI library inspired by React and Svelte."
    },
    {
      name: "Qwik",
      logo: "https://cdn.simpleicons.org/qwik/009688",
      description: "Next-gen JavaScript framework focused on instant-loading web apps."
    }
  ];
  
// techRender.js — Dynamically creates all tech + framework flip cards

const techContainer = document.getElementById("techCardCarousel");

const renderTechCards = (data) => {
  if (!techContainer || !Array.isArray(data)) return;

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "flip-card tech-card";

    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="${item.logo}" alt="${item.name} Logo" />
          <h5>${item.name}</h5>
        </div>
        <div class="flip-card-back">
          ${item.description}
        </div>
      </div>
    `;

    techContainer.appendChild(card);
  });
};

// 🔁 Combine technologies + frameworks
const combinedTech = [...technologies, ...frameworks];

// 🚀 Render them all
renderTechCards(combinedTech);

// techScroll.js – Auto-scroll the entire carousel with hover pause
const techCarousel = document.getElementById("techCardCarousel");
let techScrollInterval;

function startTechAutoScroll() {
  stopTechAutoScroll(); // in case there's an existing interval

  techScrollInterval = setInterval(() => {
    techCarousel.scrollLeft += 5.2; // smooth speed
    const atEnd = techCarousel.scrollLeft + techCarousel.clientWidth >= techCarousel.scrollWidth;

    // Loop back to start
    if (atEnd) {
      techCarousel.scrollLeft = 0;
    }
  }, 16); // ~60fps
}

function stopTechAutoScroll() {
  if (techScrollInterval) {
    clearInterval(techScrollInterval);
    techScrollInterval = null;
  }
}

// Start scroll on load
window.addEventListener("load", startTechAutoScroll);

// Stop on hover
techCarousel.addEventListener("mouseenter", stopTechAutoScroll);

// Resume on leave
techCarousel.addEventListener("mouseleave", startTechAutoScroll);

// techEntryObserver.js – Animate tech section on scroll in

const techSection = document.querySelector("#tech-stack");

const techObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      techSection.classList.add("tech-section-visible");
    }
  });
}, { threshold: 0.3 });

if (techSection) techObserver.observe(techSection);