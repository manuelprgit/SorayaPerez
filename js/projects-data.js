// Projects manifest — update this file when adding new projects.
// Each project maps to a folder inside img/proyects/.
// The first image in the array is used as the cover thumbnail.

var PROJECTS = [
  {
    id: "Proyect1",
    name: "Piantini",
    images: [
      "WhatsApp Image 2026-04-13 at 21.00.08.jpeg",
      "WhatsApp Image 2026-04-13 at 21.00.08 (1).jpeg",
      "WhatsApp Image 2026-04-13 at 21.00.09.jpeg",
      "WhatsApp Image 2026-04-13 at 21.00.09 (1).jpeg",
      "WhatsApp Image 2026-04-13 at 21.00.09 (2).jpeg",
      "WhatsApp Image 2026-04-13 at 21.00.09 (3).jpeg",
    ],
  },
  {
    id: "Proyect2",
    name: "Piantini",
    images: [
      "WhatsApp Image 2026-04-13 at 21.00.50.jpeg",
      "WhatsApp Image 2026-04-13 at 21.00.50 (1).jpeg",
      "WhatsApp Image 2026-04-13 at 21.00.51.jpeg",
      "WhatsApp Image 2026-04-13 at 21.00.51 (1).jpeg",
    ],
  },
  {
    id: "Proyect3",
    name: "Cacicazgos",
    images: [
      "WhatsApp Image 2026-04-13 at 21.01.36.jpeg",
      "WhatsApp Image 2026-04-13 at 21.01.36 (1).jpeg",
      "WhatsApp Image 2026-04-13 at 21.01.36 (2).jpeg",
      "WhatsApp Image 2026-04-13 at 21.01.36 (3).jpeg",
      "WhatsApp Image 2026-04-13 at 21.01.37.jpeg",
      "WhatsApp Image 2026-04-13 at 21.01.37 (1).jpeg",
      "WhatsApp Image 2026-04-13 at 21.01.37 (2).jpeg",
    ],
  },
  {
    id: "Proyect4",
    name: "Bella Vista",
    images: [
      "WhatsApp Image 2026-04-13 at 21.02.24.jpeg",
      "WhatsApp Image 2026-04-13 at 21.02.24 (1).jpeg",
      "WhatsApp Image 2026-04-13 at 21.02.24 (2).jpeg",
      "WhatsApp Image 2026-04-13 at 21.02.24 (3).jpeg",
      "WhatsApp Image 2026-04-13 at 21.02.25.jpeg",
    ],
  },
  {
    id: "Proyect5",
    name: "Santo Domingo",
    images: [
      "WhatsApp Image 2026-04-13 at 21.03.09.jpeg",
      "WhatsApp Image 2026-04-13 at 21.03.10.jpeg",
      "WhatsApp Image 2026-04-13 at 21.03.10 (1).jpeg",
      "WhatsApp Image 2026-04-13 at 21.03.10 (2).jpeg",
      "WhatsApp Image 2026-04-13 at 21.03.10 (3).jpeg",
      "WhatsApp Image 2026-04-13 at 21.03.11.jpeg",
    ],
  },
  {
    id: "Proyect6",
    name: "Arroyo Hondo",
    images: [
      "WhatsApp Image 2026-04-13 at 21.04.08.jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.08 (1).jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.08 (2).jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.09.jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.09 (1).jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.09 (2).jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.09 (3).jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.10.jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.10 (1).jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.10 (2).jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.10 (3).jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.11.jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.11 (1).jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.11 (2).jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.11 (3).jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.11 (4).jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.12.jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.12 (1).jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.12 (2).jpeg",
      "WhatsApp Image 2026-04-13 at 21.04.12 (3).jpeg",
    ],
  },
];

function imgPath(projectId, filename) {
  return "img/proyects/" + projectId + "/" + encodeURIComponent(filename);
}
