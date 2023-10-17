const logInForm = document.querySelector('.login-form');

const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '') {
        alert('Please fill in email the field!');
        return;
    } else if (password === '') {
        alert('Please fill in password the field!');
        return;
    }

    const formFields = {
        email,
        password,
    };

    console.log(formFields);
    
    form.reset();
};

logInForm.addEventListener('submit', handleSubmit);