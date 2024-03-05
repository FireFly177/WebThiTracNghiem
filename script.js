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
    let registerSuccess = true;
    // check confimartion password
    if (registerPassword.value != registerConfirm.value) {
        alert("Your confirmation password doesn't match!!!")
        registerSuccess = false;
    }


    //Check empty value
    if (registerUserName.value == null || registerUserName.value.trim() === "") {

        registerUserName.style.border = "3px solid red";  // Change border to red
        registerUserName.placeholder = "Please enter a username"
        registerSuccess = false;

    } else {
        registerUserName.style.border = ""; // Reset border to default

    }
    if (registerEmail.value == null || registerEmail.value.trim() === "") {

        registerEmail.style.border = "3px solid red";  // Change border to red
        registerEmail.placeholder = "Please enter a email"
        registerSuccess = false;

    } else {
        registerEmail.style.border = ""; // Reset border to default

    }
    if (registerPassword.value == null || registerPassword.value.trim() === "") {

        registerPassword.style.border = "3px solid red";  // Change border to red
        registerPassword.placeholder = "Please enter a password"
        registerSuccess = false;

    } else {
        registerPassword.style.border = ""; // Reset border to default

    }
    if (registerConfirm.value == null || registerConfirm.value.trim() === "") {

        registerConfirm.style.border = "3px solid red";  // Change border to red
        registerConfirm.placeholder = "Please enter the confirmation password"
        registerSuccess = false;

    } else {
        registerConfirm.style.border = ""; // Reset border to default

    }
    //Check empty value


    // Store new account in local storage 
    if (registerSuccess = true) {
        localStorage.setItem(registerUserName.value, registerPassword.value);
        // console.log(registerUserName.value + " " + registerPassword.value)
    }

});
// || registerEmail == null || registerPassword == null || registerUserName== null