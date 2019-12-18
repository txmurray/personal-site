const delayLoop = (fn, delay) => {
    return (x, i) => {
      setTimeout(() => {
        fn(x);
      }, i * delay);
    };
  };
  
const items = [
"digital products",
"logos",
"websites",
"icons",
"apps",
"pitch decks",
"arcade cabinets",
"dashboards",
"digital ads",
"animations",
"print ads",
"digital products",
"ice sculptures",
"emails",
"neon signs",
"experiences" 
];
  
const output = document.querySelector("#output");
  
const swapText = s => output.innerText = s;

items.forEach(
    delayLoop(swapText, 2000)
);


// ---------------------------------------------------------
// ---------------------------------------------------------


// const items = [
// "digital products",
// "logos",
// "websites",
// "icons",
// "apps",
// "pitch decks",
// "arcade cabinets",
// "dashboards",
// "digital ads",
// "animations",
// "print ads",
// "digital products",
// "ice sculptures",
// "emails",
// "neon signs",
// "experiences" 
// ];

// const output = document.querySelector("#output");

// function replaceText(i) {
//   setTimeout(function() {
//     output.innerText = items[i];
//   }, 2000 * i);
// }

// for (let i = 0; i < items.length; i++) {
//   replaceText(i);
// };