const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();
    const {email, password} = event.currentTarget.elements;
    
if(password.value === '' || email.value === ''){
   return alert ('Всі поля повинні бути заповнені')
};

const userData = {
        email: email.value,
        password: password.value,
    }
    console.log(userData);
    formEl.reset();
    
};
