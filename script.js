// set admin account
localStorage.setItem("admin", "123")
localStorage.setItem("duynguyen", "1772003")

let loginToRegister = document.querySelector('.login-register'); //from-login-to-register button
let registerToLogin = document.querySelector('.register-login'); // from register-to-login button
let registerForm = document.querySelector('.register'); // Register form
let loginForm = document.querySelector('.login'); // Login form


// Change between login and register
loginToRegister.addEventListener('click', () => {
    registerForm.classList.add('active');
    loginForm.classList.add('active');
})

registerToLogin.addEventListener('click', () => {
    registerForm.classList.remove('active');
    loginForm.classList.remove('active');
})

// Login
let loginSubmitButton = document.querySelector('.loginSubmitButton'); // Login submit button
let loginUsernameText = document.getElementById('loginUsernameText'); // Login username field
let loginPasswordText = document.getElementById('loginPasswordText'); // Password username field

loginSubmitButton.addEventListener('click', () => {
    // Check if username is 'admin'
    if (loginUsernameText.value === 'admin') {
        if (loginPasswordText.value === localStorage.getItem('admin')) {
            alert("Logged in as Admin. You have full privileges.");
        } else {
            alert("Wrong username or password.");
        }
    } else {
        // Regular user login
        let username = loginUsernameText.value;
        let password = loginPasswordText.value;
        
        // Check if stored password matches entered password
        if (localStorage.getItem(username) === password) {
            alert(`Logged in as ${username}.`);
        } else {
            alert("Wrong username or password.");
        }
    }
});
// Register
let registerSubmitButton = document.querySelector(".registerSubmitButton");

let registerUserName = document.getElementById("Register-username");
let registerEmail = document.getElementById("Register-email");
let registerPassword = document.getElementById("Register-password");
let registerConfirm = document.getElementById("Register-confirm");
// let registerUserNameText = registerUserName.value; // Using value property for input field

let check = 0;
registerSubmitButton.addEventListener('click', () => {
    // check confimartion password
    if (registerPassword.value != registerConfirm.value) {
        alert("Your confirmation password doesn't match!!!")
    }


    //Check empty value
    if (registerUserName.value == null || registerUserName.value.trim() === "") {
     
        registerUserName.style.border = "3px solid red";  // Change border to red
        registerUserName.placeholder = "Please enter a username"
      
    } else {
        registerUserName.style.border = ""; // Reset border to default
     
    }
    if (registerEmail.value == null || registerEmail.value.trim() === "") {
     
        registerEmail.style.border = "3px solid red";  // Change border to red
        registerEmail.placeholder = "Please enter a email"
      
    } else {
        registerEmail.style.border = ""; // Reset border to default
     
    }
    if (registerPassword.value == null || registerPassword.value.trim() === "") {
     
        registerPassword.style.border = "3px solid red";  // Change border to red
        registerPassword.placeholder = "Please enter a password"
      
    } else {
        registerPassword.style.border = ""; // Reset border to default
     
    }
    if (registerConfirm.value == null || registerConfirm.value.trim() === "") {
     
        registerConfirm.style.border = "3px solid red";  // Change border to red
        registerConfirm.placeholder = "Please enter the confirmation password"
      
    } else {
        registerConfirm.style.border = ""; // Reset border to default
     
    }
    //Check empty value


    // Store new account in local storage 
    localStorage.setItem(registerUserName.value,registerPassword.value);

});
// || registerEmail == null || registerPassword == null || registerUserName== null
