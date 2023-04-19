// Verify that the username field accepts only valid input and rejects invalid input
const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('username-error');

usernameInput.addEventListener('input', () => {
  const value = usernameInput.value.trim();
  if (value === '') {
    usernameError.textContent = 'Username is required';
    usernameInput.classList.add('invalid');
  } else if (/[^a-zA-Z0-9]/.test(value)) {
    usernameError.textContent = 'Username must contain only letters and numbers';
    usernameInput.classList.add('invalid');
  } else {
    usernameError.textContent = '';
    usernameInput.classList.remove('invalid');
  }
});

// Verify that the password field accepts only valid input and rejects invalid input
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error');

passwordInput.addEventListener('input', () => {
  const value = passwordInput.value.trim();
  if (value === '') {
    passwordError.textContent = 'Password is required';
    passwordInput.classList.add('invalid');
  } else if (value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
    passwordInput.classList.add('invalid');
  } else {
    passwordError.textContent = '';
    passwordInput.classList.remove('invalid');
  }
});

// Verify that the login button is enabled only when both the username and password fields are filled
const loginButton = document.getElementById('login-btn');

function updateLoginButton() {
  if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

usernameInput.addEventListener('input', updateLoginButton);
passwordInput.addEventListener('input', updateLoginButton);

// Verify that clicking the forgot password link takes the user to the password reset page
const forgotPasswordLink = document.getElementById('forgot-password-link');

forgotPasswordLink.addEventListener('click', () => {
  alert('Redirecting to password reset page...');
});

// Verify that incorrect login credentials result in an error message
loginButton.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  if (username !== 'Anand' || password !== 'Anand@12') {
    alert('Incorrect username or password. Please try again.');
  } 
  
  else {
    alert("login Successful");
   // Redirect to a new page and replace the current URL in the browser's history
    window.location.href('http://127.0.0.1:5500/P1/h2.html');
  }
});
