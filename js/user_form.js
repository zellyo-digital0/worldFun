//sigin form
var passwordInput = document.getElementById("psw");
var eyeIcon = document.getElementById("togglePassword");
var passwordMessage = document.getElementById("passwordMessage");

// Function to toggle password visibility
function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

// Function to validate password strength dynamically
passwordInput.addEventListener("input", function () {
    var password = passwordInput.value;
    var containsLowercase = /[a-z]/.test(password);
    var containsUppercase = /[A-Z]/.test(password);
    var containsNumber = /\d/.test(password);
    var isLengthValid = password.length >= 8;

    if (containsLowercase && containsUppercase && containsNumber && isLengthValid) {
        passwordMessage.textContent = "Password strength: Strong";
        passwordMessage.style.color = "green";
    } else {
        passwordMessage.textContent = "Password must contain at least one number, one uppercase and lowercase letter, and be at least 8 characters long.";
        passwordMessage.style.color = "red";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // var passwordInput = document.getElementById("psw");
    var confirmPasswordInput = document.getElementById("confirmPassword");
    var confirmPasswordMessage = document.getElementById("confirmPasswordMessage");

    // Function to toggle password visibility
    function togglePasswordVisibility() {
        var confirmPasswordInput = document.getElementById("confirmPassword");
        var eyeIcon = document.getElementById("togglePassword");

        if (confirmPasswordInput.type === "password") {
            confirmPasswordInput.type = "text";
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
        } else {
            confirmPasswordInput.type = "password";
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
        }
    }

    // Event listener for eye icon click to toggle password visibility
    var eyeIcon = document.getElementById("togglePassword");
    eyeIcon.addEventListener("click", function () {
        togglePasswordVisibility();
    });

    // Event listener for input change on password field
    passwordInput.addEventListener("input", function () {
        validatePassword();
    });

    // Event listener for input change on confirm password field
    confirmPasswordInput.addEventListener("input", function () {
        validatePassword();
    });

    // Function to validate password and confirm password match
    function validatePassword() {
        var password = passwordInput.value;
        var confirmPassword = confirmPasswordInput.value;

        if (password === confirmPassword) {
            confirmPasswordMessage.textContent = "Passwords match";
            confirmPasswordMessage.style.color = "green";
        } else {
            confirmPasswordMessage.textContent = "Passwords do not match";
            confirmPasswordMessage.style.color = "red";
        }
    }
});
