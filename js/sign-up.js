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
    // According to https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html.
    // Internationally, phone numbers have a maximum of 15 characters.
    const maxLength = 15;
    if (phoneNumber.value.length > maxLength) {
        phoneNumber.value = phoneNumber.value.slice(0, maxLength);
    }
});

confirmPassword.addEventListener("input", () => {
    confirmPassword.setCustomValidity("");
});

const signUpModalElement = document.getElementById("signUpModal");
signUpFormElement.addEventListener("submit", event => {
    event.preventDefault();
    // According to https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html.
    // Internationally, phone numbers have a minimum of 7 characters.
    if (phoneNumber.value.length < 7) {
        phoneNumber.setCustomValidity("Minimum phone number character length is 7.");
    } else if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity("Passwords do not match.");
    }
    if (signUpFormElement.checkValidity()) {
        signUpModalElement.showModal();
    } else {
        signUpFormElement.reportValidity();
    }
});

const closeModalElement = document.getElementById("closeModal");
closeModalElement.addEventListener("click", () => {
    signUpModalElement.close();
});