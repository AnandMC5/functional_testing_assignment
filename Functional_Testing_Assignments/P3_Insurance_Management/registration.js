// Get the form element
const form = document.getElementById('registration-form');

// Listen for form submit event
form.addEventListener('submit', (event) => {
	event.preventDefault(); // prevent default form submit behavior

	// Get form fields values
	const name = document.getElementById('name').value.trim();
	const email = document.getElementById('email').value.trim();
	const phone = document.getElementById('phone').value.trim();
	const password = document.getElementById('password').value.trim();

	// Validate name field
	if (name === '') {
		alert('Name is required.');
		return;
	}

	// Validate email field
	if (!/\S+@\S+\.\S+/.test(email)) {
		alert('Invalid email address.');
		return;
	}

	// Validate phone field
	if (!/^\d{10}$/.test(phone)) {
		alert('Invalid phone number. Please enter 10 digits without spaces or dashes.');
		return;
	}

	// Validate password field
	if (password.length < 6) {
		alert('Password must be at least 6 characters long.');
		return;
	}

	// If all fields are valid, submit the form
	form.submit();
});
