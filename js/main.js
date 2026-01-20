const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("nav");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    navToggle.setAttribute(
      "aria-expanded",
      navMenu.classList.contains("open")
    );
  });
}

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && reveals.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  reveals.forEach((reveal) => observer.observe(reveal));
} else {
  reveals.forEach((reveal) => reveal.classList.add("is-visible"));
}
