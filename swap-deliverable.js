
const array = [
  "products",
  "logos",
  "websites",
  "icons",
  "apps",
  "pitch decks",
  "dashboards",
  "digital ads",
  "animations",
  "print ads",
  "emails",
  "experiences" ,
  ];

const deliverable = document.querySelector("#deliverable");
let iterationCount = 0;

deliverable.addEventListener('animationiteration', () => {
  deliverable.textContent = array[++iterationCount % array.length];
});