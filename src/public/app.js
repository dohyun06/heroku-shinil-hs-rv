const h1 = document.querySelector('h1');
const dot = ['', '.', '..', '...'];
let index = 0;

setInterval(() => {
  h1.innerText = `Loading${dot[index]}`;
  index += 1;
  index %= 4;
}, 1000);
