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

items.forEach(
  delayLoop(function() { output.classList.add('test-animation')}
  , 2000)
);

items.forEach(
  delayLoop(function() { output.classList.remove('test-animation')}
  , 4000)
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
//   output.classList.add('test-animation');
//   replaceText(i);
//   output.classList.remove('test-animation');
// };

// ---------------------------------------------------------
// ---------------------------------------------------------

// function animate() {

//   const array = [
//     "products",
//     "logos",
//     "websites",
//     "icons",
//     "apps",
//     "pitch decks",
//     "dashboards",
//     "digital ads",
//     "animations",
//     "print ads",
//     "emails",
//     "experiences" ,
//     ];

//   function shuffle(arr) {
//     for (var i = arr.length - 1; i >= 0; i--) {

//       var randomIndex = Math.floor(Math.random() * (i + 1));
//       var itemAtIndex = arr[randomIndex];

//       arr[randomIndex] = arr[i];
//       arr[i] = itemAtIndex;
//     }
//   }

//   var index = 0;
  
//   function loop() {

//     if (index < array.length - 1) {
//       index++;
//     } else {
//       index = 0;
//     }

//     arrayValue = array[index];
//     document.getElementById("js-preloader").innerHTML = arrayValue;
//     document.getElementById("js-preloader").className = 'o-preloader__text--js-cycle';
//   }

//   shuffle(array);
//   loop();
//   setInterval(loop, 2500);
// }

// animate();