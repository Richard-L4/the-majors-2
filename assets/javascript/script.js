document.getElementById("signupForm").addEventListener("submit", function(event) {
    const password = document.getElementById("createPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const passwordError = document.getElementById("passwordError");

    if (password !== confirmPassword) {
        event.preventDefault(); // Prevent form submission
        passwordError.style.display = "block"; // Show error message
    } else {
        passwordError.style.display = "none"; // Hide error if passwords match
    }
});
