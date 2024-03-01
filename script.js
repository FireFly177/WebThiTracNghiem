let loginToRegister = document.querySelector('.login-register');
let registerToLogin = document.querySelector('.register-login');
let registerForm = document.querySelector('.register');
let loginForm = document.querySelector('.login');

loginToRegister.addEventListener('click', () => {
    registerForm.classList.add('active');
    loginForm.classList.add('active');
})

registerToLogin.addEventListener('click', () => {
    registerForm.classList.remove('active');
    loginForm.classList.remove('active');
})
// Register
let registerSubmitButton = document.querySelector(".registerSubmitButton");

let registerUserName = document.getElementById("Register-username");
let registerEmail = document.getElementById("Register-email");
let registerPassword = document.getElementById("Register-password");
let registerConfirm = document.getElementById("Register-confirm");
// let registerUserNameText = registerUserName.value; // Using value property for input field
registerSubmitButton.addEventListener('click', () => {
    if (registerPassword.value != registerConfirm.value) {
        alert("The confirmation password doesn't match!!!")
    }
    // let registerConfirm = document.getElementById("Register-confirm");

    if (registerConfirm.value == null || registerConfirm.value.trim() === "") {
        registerConfirm.style.background = "red"; // Change border to red
    } else {
        registerConfirm.style.border = ""; // Reset border to default
    }

});
// || registerEmail == null || registerPassword == null || registerUserName== null