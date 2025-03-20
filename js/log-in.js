const htmlLocation = "log-in";
const password = document.getElementById("password");
function Password(input) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Password constructor.`);
    }
    this.input = input;
    const view = document.createElement("i");
    view.classList.add(`${htmlLocation}__password-view`, "fa-solid", "fa-eye");
    this.view = view;
    this.open = false;
    this.addListeners();
}

Password.prototype.addListeners = function() {
    this.input.addEventListener("input", () => this.attachView());
    this.view.addEventListener("click", () => this.toggleView());
}

Password.prototype.attachView = function() {
    if (this.input.value.length > 0) {
        this.input.after(this.view);
    } else {
        this.view.remove();
        if (this.open) this.toggleView();
    }
}

Password.prototype.toggleView = function() {
    if (this.open) {
        this.input.type = "password";
        this.view.classList.remove("fa-eye-slash");
        this.view.classList.add("fa-eye");
        this.open = false;
    } else {
        this.input.type = "text";
        this.view.classList.remove("fa-eye");
        this.view.classList.add("fa-eye-slash");
        this.open = true;
    }
}

new Password(password);

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

const logInForm = document.getElementById("logInForm");
const logInModal = document.getElementById("logInModal");
logInForm.addEventListener("submit", event => {
    event.preventDefault();
    // Internationally, phone numbers have a minimum of 7 characters.
    // Source: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html
    const minLength = 7;
    if (phoneNumber.value.length < minLength) {
        const validity = `Minimum phone number character length is ${minLength}.`;
        phoneNumber.setCustomValidity(validity);
    }
    if (logInForm.checkValidity()) {
        logInModal.showModal();
        setTimeout(() => {
            window.location.href = "./";
        }, 2000);
    } else {
        logInForm.reportValidity();
    }
});