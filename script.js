let loginToRegister = document.querySelector('.login-register');
let registerToLogin = document.querySelector('.register-login');
let registerForm = document.querySelector('.register');
let loginForm = document.querySelector('.login');

registerForm.classList.add('hidden')
loginForm.classList.add('hidden')

loginToRegister.addEventListener('click', () => {
    registerForm.classList.add('active');
    loginForm.classList.add('active');
})

registerToLogin.addEventListener('click', () => {
    registerForm.classList.remove('active');
    loginForm.classList.remove('active');
})