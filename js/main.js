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

const languageSwitchers = document.querySelectorAll("[data-language-switcher]");

languageSwitchers.forEach((switcher) => {
  const buttons = switcher.querySelectorAll("[data-lang-target]");
  const panels = switcher.querySelectorAll("[data-lang-content]");
  const copyContainer = switcher.querySelector("[data-bio-copy]");

  if (!buttons.length || !panels.length || !copyContainer) return;

  const setCopyHeight = (lang) => {
    const currentPanel = switcher.querySelector(`[data-lang-content="${lang}"]`);
    if (!currentPanel) return;
    copyContainer.style.minHeight = `${currentPanel.scrollHeight}px`;
  };

  const setLanguage = (lang) => {
    buttons.forEach((button) => {
      const isTarget = button.dataset.langTarget === lang;
      button.classList.toggle("is-active", isTarget);
      button.setAttribute("aria-pressed", String(isTarget));
    });

    panels.forEach((panel) => {
      const isTarget = panel.dataset.langContent === lang;
      panel.classList.toggle("is-active", isTarget);
      panel.setAttribute("aria-hidden", String(!isTarget));
    });

    setCopyHeight(lang);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.langTarget || "es");
    });
  });

  const activeButton = switcher.querySelector("[data-lang-target].is-active");
  const initialLang = activeButton?.dataset.langTarget || "es";
  setLanguage(initialLang);

  window.addEventListener("resize", () => {
    const selectedButton = switcher.querySelector("[data-lang-target].is-active");
    const selectedLang = selectedButton?.dataset.langTarget || "es";
    setCopyHeight(selectedLang);
  });
});
