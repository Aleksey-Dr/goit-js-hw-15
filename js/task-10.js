function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const handleCreateBtn = () => {
  const items = [];
  const amount = document.querySelector('input').value;

  for (let i = 0; i < Number(amount); i += 1) {
    let item = document.createElement('div');

    let size = `${30 + i * 10}px`;
    item.style.width = size;
    item.style.height = size;
    item.style.background = getRandomHexColor();
    item.classList.add('element');

    items.push(item);
  };

  boxes.append(...items);
};

const handleDestroyBtn = () => {
  const amount = document.querySelector('#boxes').childNodes.length;

  for (let i = 0; i < amount; i += 1) {
    let element = document.querySelector('.element');
    element.remove();
  };
};

createBtn.addEventListener('click', handleCreateBtn);
destroyBtn.addEventListener('click', handleDestroyBtn);
