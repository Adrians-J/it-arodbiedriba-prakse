// Static task list
const tasks = [
  "Jānis Bērziņš – Praktikants",
  "Projekta uzdevums 1 – Pabeigt līdz 01.12",
  "Projekta uzdevums 2 – Testa ieraksts"
];

const div = document.getElementById("members");
div.innerHTML = tasks.map(t => `<p>${t}</p><hr>`).join("");
