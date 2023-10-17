let counterValue = 0;

const value = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

const handlerDecrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

const handlerIncrement = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

decrement.addEventListener('click', handlerDecrement);
increment.addEventListener('click', handlerIncrement);