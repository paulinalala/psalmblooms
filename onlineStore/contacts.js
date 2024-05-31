const inputs = document.querySelectorAll(".input");
const sendButton = document.getElementById('sendButton');

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value === "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
    input.addEventListener("input", validateForm); // Add input event listener
});

sendButton.addEventListener('click', function() {
    if (validateForm()) {
        sendMessage();
    }
});

function validateForm() {
    let isValid = true;

    // Reset error messages and disable button
    inputs.forEach(input => {
        const errorMessage = input.parentNode.querySelector(".error-message");
        input.parentNode.classList.remove("error");
        errorMessage.textContent = "";
    });
    sendButton.disabled = true;

    // Check each input field
    inputs.forEach(input => {
        const errorMessage = input.parentNode.querySelector(".error-message");
        if (!input.checkValidity()) {
            isValid = false;
            input.parentNode.classList.add("error");
            errorMessage.textContent = `${input.name.charAt(0).toUpperCase() + input.name.slice(1)} is required.`;
        }
    });

    // Enable button if all fields are valid
    if (isValid) {
        sendButton.disabled = false;
    }

    return isValid;
}

function sendMessage() {
    showMessage();
}

function showMessage() {
    var popup = document.getElementById("message_sent");
    popup.classList.add("active");
}

function hideMessage() {
    var popup = document.getElementById("message_sent");
    popup.classList.remove("active");
    location.reload();
}
