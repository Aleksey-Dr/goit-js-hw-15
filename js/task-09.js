function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
// console.log(getRandomHexColor());

const changeColor = document.querySelector('.change-color');

const handlerBtn = () => {
  document.querySelector('body').style.backgroundColor = getRandomHexColor();
  document.querySelector('.color').textContent = getRandomHexColor();
};

changeColor.addEventListener('click', handlerBtn);