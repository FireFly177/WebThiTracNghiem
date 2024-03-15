localStorage.clear()
// Set admin account in localStorage
let adminUser = {
    username: 'admin',
    password: 'admin236980',
    email: '',
    exams: []
}
let Users = [adminUser]
localStorage.setItem('Users', JSON.stringify(Users));


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
    let username = loginUsernameText.value;
    let password = loginPasswordText.value;
    let Users = JSON.parse(localStorage.getItem('Users'));
    // Check if username is 'admin'
    if (username === 'admin') {
        let adminUser = Users.find(user => user.username === 'admin');
        if (adminUser.password === password) {
            alert("Logged in as Admin. You have full privileges.");
            window.location.href = "admindashboard.html";
        } else {
            alert("Wrong username or password.");
        }
    } else {
        // Regular user login
        let user = Users.find(user => user.username === username);
        if (user && user.password === password) {
            alert(`Logged in as ${user.username}.`);
            window.location.href = "mainpage.html";
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

registerSubmitButton.addEventListener('click', () => {
    let registerSuccess = true;
    let Users = JSON.parse(localStorage.getItem('Users'));

    // Check if the username is already taken
    if (Users.some(user => user.username === registerUserName.value)) {
        alert("This username has already been taken!!!")
        registerSuccess = false;
    }
    // check confimartion password
    if (registerPassword.value != registerConfirm.value) {
        alert("Your confirmation password doesn't match!!!")
        registerSuccess = false;
    }

    //Check empty value
    if (registerUserName.value == null || registerUserName.value.trim() === "") {


        registerSuccess = false;

    } else {
        registerUserName.style.border = ""; // Reset border to default

    }

    if (registerEmail.value == null || registerEmail.value.trim() === "") {


        registerSuccess = false;

    } 

    if (registerPassword.value == null || registerPassword.value.trim() === "") {


        registerSuccess = false;

    } 

    if (registerConfirm.value == null || registerConfirm.value.trim() === "") {


        registerSuccess = false;

    } 
    //Check empty value


    // Store new account in local storage 
    if (registerSuccess === true) {
        let newUser = {
            username: registerUserName.value,
            password: registerPassword.value,
            email: registerEmail.value,
            exams: []
        };
        Users.push(newUser);

        localStorage.setItem('Users', JSON.stringify(Users));
        alert("Account created successfully!");
    }

});
// || registerEmail == null || registerPassword == null || registerUserName== null
