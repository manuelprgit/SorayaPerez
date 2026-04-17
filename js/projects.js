(function () {
  const grid = document.getElementById("projects-grid");
  console.log(window.PROJECTS);

  if (!grid || !window.PROJECTS) return;

  PROJECTS.forEach(function (project) {
    const cover = imgPath(project.id, project.images[0]);
    const url = "project-detail.html?project=" + encodeURIComponent(project.id);

    const a = document.createElement("a");
    a.className = "portfolio-item portfolio-item--link reveal";
    a.href = url;

    const img = document.createElement("img");
    img.src = cover;
    img.alt = project.name;
    img.loading = "lazy";

    const caption = document.createElement("div");
    caption.className = "portfolio-caption";
    caption.textContent = project.name;

    a.appendChild(img);
    a.appendChild(caption);
    grid.appendChild(a);
  });
})();
