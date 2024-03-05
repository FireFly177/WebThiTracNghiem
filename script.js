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
