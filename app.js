const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const submitButton = document.getElementById('submitButton');

usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);

function validateUsername() {
    const username = usernameInput.value;
    const usernameError = document.getElementById('usernameError');

    if (/^[a-zA-Z0-9_]{8,}$/.test(username)) {
        usernameError.textContent = '';
    } else {
        usernameError.textContent = 'Username không hợp lệ';
    }

    toggleSubmitButton();
}

function validateEmail() {
    const email = emailInput.value;
    const emailError = document.getElementById('emailError');

    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        emailError.textContent = '';
    } else {
        emailError.textContent = 'Email không hợp lệ';
    }

    toggleSubmitButton();
}

function validatePhone() {
    const phone = phoneInput.value;
    const phoneError = document.getElementById('phoneError');

    if (/^\(\+84\) [0-9]{9,10}$/.test(phone)) {
        phoneError.textContent = '';
    } else {
        phoneError.textContent = 'Số điện thoại không hợp lệ';
    }
    y
    toggleSubmitButton();
}

function toggleSubmitButton() {
    const usernameError = document.getElementById('usernameError').textContent;
    const emailError = document.getElementById('emailError').textContent;
    const phoneError = document.getElementById('phoneError').textContent;

    if (usernameError === '' && emailError === '' && phoneError === '') {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'disabled');
    }
}