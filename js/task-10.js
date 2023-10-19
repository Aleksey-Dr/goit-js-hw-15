function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

const handleCreateBtn = () => {
  const amount = input.value;
  
  createBoxes(amount);
};

const handleDestroyBtn = () => {
  destroyBoxes();
};

function createBoxes (amount) {
  const items = [];
  
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

function destroyBoxes() {
  boxes.innerHTML = '';
};

createBtn.addEventListener('click', handleCreateBtn);
destroyBtn.addEventListener('click', handleDestroyBtn);
