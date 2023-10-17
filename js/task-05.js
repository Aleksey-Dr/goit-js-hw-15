const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const handlerInput = () => {
    nameOutput.textContent = nameInput.value;
    if (nameInput.value === '') {
        nameOutput.textContent = 'Anonymous';
    }
};

nameInput.addEventListener('input', handlerInput);