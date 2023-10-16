const input = document.querySelector('#validation-input');
// console.log(input);

const handlerOfInput = () => {
    if (input.value.length > 0 && input.value.length < 6) {
        input.classList.add('invalid');
        input.classList.remove('valid');
        return;
    } else if (input.value.length >= 6) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        return;
    }
    input.classList.remove('valid', 'invalid');
};

input.addEventListener('blur', handlerOfInput);