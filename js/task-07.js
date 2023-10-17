const input = document.querySelector('#font-size-control');
const display = document.querySelector('#text');

input.addEventListener('input', () => display.style.fontSize = `${input.value}px`);