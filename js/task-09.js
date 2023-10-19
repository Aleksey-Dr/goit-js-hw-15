function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
// console.log(getRandomHexColor());

const changeColor = document.querySelector('.change-color');

const handlerBtn = () => {
  const color = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.color').textContent = color;
};

changeColor.addEventListener('click', handlerBtn);