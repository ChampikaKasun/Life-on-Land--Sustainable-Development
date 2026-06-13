document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const nameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const ratingInput = document.getElementById("ratingInput");
    const opinionInput = document.getElementById("opinion");
    const confirmationMessage = document.createElement("div");
    const stars = document.getElementsByClassName('star');

    for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener('click', function() {
            ratingInput.value = i + 1;

            for (let j = 0; j < stars.length; j++) {
                stars[j].classList.remove('selected');
            }

            for (let j = 0; j <= i; j++) {
                stars[j].classList.add('selected');
            }
        });
    }

    form.addEventListener("submit", function (event) {
        if (!validateFormData()) {
            event.preventDefault();
        } else {
            confirmationMessage.innerHTML = "<p>Thank you for your feedback!</p>";
            confirmationMessage.style.color = "aqua";
        }
    });

    function validateFormData() {
        confirmationMessage.innerHTML = "";

        //clear errors
        const errors = document.querySelectorAll(".error-message");
        errors.forEach(error => error.remove());
        const errorInputs = document.querySelectorAll(".error");
        errorInputs.forEach(input => input.classList.remove("error"));

        //validate name
        if (nameInput.value.trim() === "") {
            populateErrorMessage(nameInput, "Name is required");
        }

        //validate email
        if (emailInput.value.trim() !== "") {
            const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            const isValidEmail = re.test(String(emailInput.value).toLowerCase());
            if (!isValidEmail) {
                populateErrorMessage(emailInput, "Email is not in the correct format");
            }
        }

        //validate rating
        if (!ratingInput.value) {
            populateErrorMessage(ratingInput, "Rating is required");
        }

        //validate feedback
        if (opinionInput.value.trim() === "") {
            populateErrorMessage(opinionInput, "Please provide your feedback");
        }

        return true;
    }

    function populateErrorMessage(input, message) {
        const error = document.createElement("div");
        error.className = "error-message";
        error.innerText = message;
        error.style.color = "yellow";
        input.classList.add("error");
        input.parentNode.appendChild(error);
    }
});
