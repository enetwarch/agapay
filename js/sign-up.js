const backArrowElement = document.getElementById("backArrow");
backArrowElement.addEventListener("click", () => {
    window.location.href = "./";
});

const signUpFormElement = document.getElementById("signUpForm");
const firstName = document.getElementById("firstName");
const middleName = document.getElementById("middleName");
const lastName = document.getElementById("lastName");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

phoneNumber.addEventListener("input", () => {
    phoneNumber.setCustomValidity("");
    // Internationally, phone numbers have a maximum of 15 characters.
    // Source: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html
    const maxLength = 15;
    if (phoneNumber.value.length > maxLength) {
        phoneNumber.value = phoneNumber.value.slice(0, maxLength);
    }
});

confirmPassword.addEventListener("input", () => {
    confirmPassword.setCustomValidity("");
});

const phoneNumberModalElement = document.getElementById("phoneNumberModal");
const signUpModalElement = document.getElementById("signUpModal");
signUpFormElement.addEventListener("submit", event => {
    event.preventDefault();
    // Internationally, phone numbers have a minimum of 7 characters.
    // Source: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html
    const minLength = 7;
    if (phoneNumber.value.length < minLength) {
        const validity = `Minimum phone number character length is ${minLength}.`;
        phoneNumber.setCustomValidity(validity);
    } else if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity("Passwords do not match.");
    }
    if (signUpFormElement.checkValidity()) {
        phoneNumberModalElement.innerText = phoneNumber.value;
        signUpModalElement.showModal();
    } else {
        signUpFormElement.reportValidity();
    }
});

const closeModalElement = document.getElementById("closeModal");
closeModalElement.addEventListener("click", () => {
    signUpModalElement.close();
});

const authNumbers = document.querySelectorAll("#authNumbers > *");
console.log(authNumbers);
authNumbers.forEach(number => {
    const maxLength = 1;
    number.addEventListener("input", () => {
        const pattern = /^[0-9]$/;
        if (!pattern.test(number.value)) {
            const length = number.value.length;
            number.value = number.value.slice(0, length - 1);
        }
        if (number.value.length === maxLength) changeFocus(maxLength);
    });
    number.addEventListener("focus", event => {
        if (event.target.value.length === maxLength) {
            changeFocus(maxLength);
        }
    });
    number.addEventListener("keydown", event => {
        if (event.code === "Backspace") {
            event.preventDefault();
            deleteAuthNumber(maxLength);
        }
    });
});

function changeFocus(maxLength) {
    for (const number of authNumbers) {
        if (number.value.length !== maxLength) {
            number.focus();
            break;
        }
    }
}

function deleteAuthNumber(maxLength) {
    const reversedAuthNumbers = Array.from(authNumbers).reverse();
    for (const number of reversedAuthNumbers) {
        if (number.value.length === maxLength) {
            number.value = "";
            break;
        }
    }
    changeFocus(maxLength);
}

const signUpModalFormElement = document.getElementById("signUpModalForm");
signUpModalFormElement.addEventListener("submit", event => {
    event.preventDefault();
    const container = document.createElement("div");
    container.classList.add("sign-up__container");
    const headerText = document.createElement("h1");
    headerText.classList.add("sign-up__header-text");
    headerText.innerText = "Success";
    const informationText = document.createElement("p");
    informationText.classList.add("sign-up__information-text");
    informationText.innerText = "Account created successfully. ";
    informationText.innerText += "You will be redirected to the log in page shortly";
    container.append(headerText, informationText);
    signUpModalFormElement.innerHTML = "";
    signUpModalFormElement.appendChild(container);
    setTimeout(() => {
        window.location.href = "log-in";
    }, 2000);
});