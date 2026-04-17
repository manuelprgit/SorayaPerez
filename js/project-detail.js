(function () {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("project");
  const project = (window.PROJECTS || []).find(function (p) {
    return p.id === projectId;
  });

  if (!project) {
    document.getElementById("project-title").textContent = "Proyecto no encontrado";
    return;
  }

  // Hero
  const heroImg = document.getElementById("hero-img");
  heroImg.src = imgPath(project.id, project.images[0]);
  heroImg.alt = project.name;

  document.getElementById("project-title").textContent = project.name;
  document.title = project.name + " | Soraya Pérez";

  // Gallery
  const gallery = document.getElementById("gallery-grid");
  const images = project.images;

  images.forEach(function (filename, index) {
    const img = document.createElement("img");
    img.src = imgPath(project.id, filename);
    img.alt = project.name;
    img.loading = "lazy";
    img.className = "gallery-img reveal";
    img.style.cursor = "pointer";
    img.addEventListener("click", function () { openLightbox(index); });
    gallery.appendChild(img);
  });

  // Lightbox
  var currentIndex = 0;

  var overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML =
    '<div class="lightbox-inner">' +
      '<button class="lightbox-close" aria-label="Cerrar">&#x2715;</button>' +
      '<button class="lightbox-prev" aria-label="Anterior">&#8592;</button>' +
      '<img class="lightbox-img" src="" alt="" />' +
      '<button class="lightbox-next" aria-label="Siguiente">&#8594;</button>' +
      '<div class="lightbox-counter"></div>' +
    '</div>';
  document.body.appendChild(overlay);

  var lightboxImg = overlay.querySelector(".lightbox-img");
  var counter = overlay.querySelector(".lightbox-counter");

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function updateLightbox() {
    lightboxImg.src = imgPath(project.id, images[currentIndex]);
    lightboxImg.alt = project.name;
    counter.textContent = (currentIndex + 1) + " / " + images.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
  }

  function next() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
  }

  overlay.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  overlay.querySelector(".lightbox-prev").addEventListener("click", prev);
  overlay.querySelector(".lightbox-next").addEventListener("click", next);

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (!overlay.classList.contains("is-open")) return;
    if (e.key === "ArrowLeft") prev();
    else if (e.key === "ArrowRight") next();
    else if (e.key === "Escape") closeLightbox();
  });
})();
