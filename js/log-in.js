import Password from "./modules/password.js";

window.addEventListener("load", () => {
    new Password(document.getElementById("password"), "log-in");
});

const backArrowElement = document.getElementById("backArrow");
backArrowElement.addEventListener("click", () => {
    window.location.href = "./";
});

const phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", () => {
    phoneNumber.setCustomValidity("");
    // Internationally, phone numbers have a maximum of 15 characters.
    // Source: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html
    const maxLength = 15;
    if (phoneNumber.value.length > maxLength) {
        phoneNumber.value = phoneNumber.value.slice(0, maxLength);
    }
});


const logInFormElement = document.getElementById("logInForm");
const logInModalElement = document.getElementById("logInModal");
logInFormElement.addEventListener("submit", event => {
    event.preventDefault();
    // Internationally, phone numbers have a minimum of 7 characters.
    // Source: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html
    const minLength = 7;
    if (phoneNumber.value.length < minLength) {
        const validity = `Minimum phone number character length is ${minLength}.`;
        phoneNumber.setCustomValidity(validity);
    }
    if (logInFormElement.checkValidity()) {
        logInModalElement.showModal();
        setTimeout(() => {
            window.location.href = "./";
        }, 2000);
    } else {
        logInFormElement.reportValidity();
    }
});