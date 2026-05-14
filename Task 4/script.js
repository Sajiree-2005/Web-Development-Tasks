const form = document.getElementById("applicationForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Input fields
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");
    const successMessage = document.getElementById("successMessage");
    // Error elements
    const errors = document.querySelectorAll(".error");
    // Clear previous errors
    errors.forEach(error => error.textContent = "");
    successMessage.textContent = "";
    let isValid = true;
    // Name validation
    if (name.value.trim() === "") {
        showError(name, "Name is required");
        isValid = false;
    }
    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
        showError(email, "Email is required");
        isValid = false;
    } else if (!email.value.match(emailPattern)) {
        showError(email, "Enter a valid email");
        isValid = false;
    }
    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (phone.value.trim() === "") {
        showError(phone, "Phone number is required");
        isValid = false;
    } else if (!phone.value.match(phonePattern)) {
        showError(phone, "Enter a valid 10-digit number");
        isValid = false;
    }
    // Message validation
    if (message.value.trim() === "") {
        showError(message, "Message cannot be empty");
        isValid = false;
    }
    // Success
    if (isValid) {
        successMessage.textContent = "Form submitted successfully!";
        form.reset();
    }
});
// Function to display errors
function showError(input, message) {
    const error = input.nextElementSibling;
    error.textContent = message;
}