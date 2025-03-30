document.getElementById("signupForm").addEventListener("submit", function (event) {
    let form = event.target; // Reference to the form
    let passwordField = document.getElementById("createPassword");
    let confirmPasswordField = document.getElementById("confirmPassword");
    let passwordError = document.getElementById("passwordError");

    // If the form is not valid, let the browser handle required validation
    if (!form.checkValidity()) {
        return; // Browser will show the required alerts
    }

    // Custom password validation (runs only if all required fields are filled)
    if (passwordField.value !== confirmPasswordField.value) {
        event.preventDefault(); // Stop form submission
        passwordError.style.display = "block";
        confirmPasswordField.classList.add("is-invalid");
    } else {
        passwordError.style.display = "none";
        confirmPasswordField.classList.remove("is-invalid");
    }
});
