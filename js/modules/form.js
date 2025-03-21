export default function Form(form, submit) {
    if (!new.target) {
        throw Error (`Use the "new" keyword on the Form constructor`);
    }
    this.form = form;
    this.submit = submit;
    this.inputs = form.querySelectorAll("input");
    this.inputs.forEach(input => this.constructInput(input));
    this.form.addEventListener("submit", event => this.validateForm(event));
}

Form.prototype.constructInput = function(input) {
    if (input.id === "phoneNumber") new PhoneNumber(input, this.form);
    if (input.id === "password") new Password(input);
    if (input.id === "confirmPassword") new ConfirmPassword(this.inputs, input, this.form);
}

Form.prototype.validateForm = function(event) {
    event.preventDefault();
    if (this.form.checkValidity()) {
        this.submit();
    } else {
        this.form.reportValidity();
    }
}

function PhoneNumber(input, form) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Number constructor.`);
    }
    this.input = input;
    this.minLength = 7;
    this.maxLength = 15;
        // Internationally, phone numbers have a minimum of 7 and a maximum of 15 characters.
    // Source: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html
    this.input.addEventListener("input", () => this.manageInput());
    form.addEventListener("submit", event => this.validateInput(event));
}

PhoneNumber.prototype.manageInput = function() {
    this.input.setCustomValidity("");
    if (this.input.value.length > this.maxLength) {
        this.input.value = this.input.value.slice(0, maxLength);
    }
}

PhoneNumber.prototype.validateInput = function(event) {
    event.preventDefault();
    if (this.input.value.length < this.minLength) {
        const validity = `Minimum phone number character length is ${minLength}.`;
        this.input.setCustomValidity(validity);
    } else {
        this.input.setCustomValidity("");
    }
}

function Password(input) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Password constructor.`);
    }
    this.input = input;
    const view = document.createElement("i");
    view.classList.add("form-field-password-view", "fa-solid", "fa-eye");
    this.view = view;
    this.open = false;
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

function ConfirmPassword(inputs, input, form) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Number constructor.`);
    }
    this.input = input;
    this.password = Array.from(inputs).find(input => input.id === "password");
    new Password(this.input);
    this.input.addEventListener("input", () => this.manageInput());
    form.addEventListener("submit", event => this.validateInput(event));
}

ConfirmPassword.prototype.manageInput = function() {
    this.input.setCustomValidity("");
    if (this.input.value.length > this.password.value.length) {
        const length = this.password.value.length;
        this.input.value = this.input.value.slice(0, length - 1);
    }
}

ConfirmPassword.prototype.validateInput = function(event) {
    event.preventDefault();
    if (this.input.value !== this.password.value) {
        this.input.setCustomValidity("Passwords do not match.");
    } else {
        this.input.setCustomValidity("");
    }
}

function AuthenticationNumber() {

}