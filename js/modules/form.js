export default function Form(element, fieldQueries = "input", submitButtonQuery = `button[type="submit"]`, authenticationCodeQuery = ".form-field-code") {
    if (!new.target) {
        throw Error (`Use the "new" keyword on the Form constructor`);
    }

    if (!(element instanceof HTMLElement)) {
        throw TypeError("element argument must be an HTML element.");
    } else if (typeof fieldQueries !== "string") {
        throw TypeError("fieldQueries argument must be a string.");
    } else if (typeof submitButtonQuery !== "string") {
        throw TypeError("submitButtonQuery argument must be a string.");
    } else if (typeof authenticationCodeQuery !== "string") {
        throw TypeError("authenticationCodeId argument must be a string.");
    }

    this.element = element;

    this.fields = Array.from(this.element.querySelectorAll(fieldQueries));
    if (this.fields.length === 0) {
        throw Error(`element argument does not have fields with "${fieldQueries}" queries.`);
    }

    this.submitButton = this.element.querySelector(submitButtonQuery);
    if (!this.submitButton) {
        throw Error(`element argument does not have a submit button with "${submitButtonQuery}" query.`);
    }

    const authenticationCode = this.element.querySelector(authenticationCodeQuery);
    if (authenticationCode) {
        const authenticationCodeElements = Array.from(authenticationCode.querySelectorAll(":scope > *"));
        new AuthenticationCode(authenticationCodeElements);
    }

    this.submitEvent = null;

    this.fields.forEach(field => this.fieldFactory(field));
}

Form.prototype.fieldFactory = function(field) {
    if (!(field instanceof HTMLElement)) {
        throw TypeError("field argument must be an HTML element.");
    }

    switch (field.id) {
        case "phoneNumber": return new PhoneNumber(field);
        case "password": return new Password(field);
        case "confirmPassword": return new ConfirmPassword(field, this.getPasswordField());
    }
}

Form.prototype.getPasswordField = function() {
    return this.fields.find(field => field.id === "password");
}

Form.prototype.onSubmit = function(submit) {
    if (typeof submit !== "function") {
        throw TypeError("submit argument must be a function.");
    }

    if (this.submitEvent) {
        this.element.removeEventListener("submit", this.submitEvent);
    }

    this.submitEvent = event => {
        event.preventDefault();

        if (this.element.checkValidity()) {
            const formData = new FormData(this.element);
            submit(formData);
        } else {
            this.element.reportValidity();
        }
    }

    this.element.addEventListener("submit", this.submitEvent);
}

function PhoneNumber(element) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Number constructor.`);
    }

    if (!(element instanceof HTMLElement)) {
        throw TypeError("element argument must be an HTML element.");
    } else if (element.type !== "number") {
        throw TypeError("element argument must be a number type input.");
    }

    this.element = element;

    // Internationally, phone numbers have a minimum of 7 and a maximum of 15 characters.
    // Source: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html
    this.minLength = 7;
    this.maxLength = 15;

    this.element.addEventListener("input", this.validateInput.bind(this));
}

PhoneNumber.prototype.validateInput = function() {
    if (this.element.value.length > this.maxLength) {
        this.element.value = this.element.value.slice(0, this.maxLength);
    }

    if (this.element.value.length < this.minLength) {
        const validity = `Minimum phone number character length is ${this.minLength}.`;
        this.element.setCustomValidity(validity);
    } else {
        this.element.setCustomValidity("");
    }
}

function Password(element, viewClassList = ["form-field-password-view", "fa-solid", "fa-eye"]) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Password constructor.`);
    }

    if (!(element instanceof HTMLElement)) {
        throw TypeError("element argument must be an HTML element.");
    } else if (element.type !== "password") {
        throw TypeError("element argument must be a password type input.");
    } else if (!Array.isArray(viewClassList)) {
        throw TypeError("viewClassList argument must be an array.");
    } else if (!viewClassList.every(className => typeof className === "string")) {
        throw TypeError("viewClassList argument must contain string elements.");
    }

    this.element = element;

    const view = document.createElement("i");
    view.classList.add(...viewClassList);

    this.view = view;
    this.viewAttached = false;
    this.viewOpen = false;

    this.element.addEventListener("input", () => this.attachView());
    this.view.addEventListener("click", () => this.toggleView());
}

Password.prototype.attachView = function() {
    if (this.element.value.length > 0) {
        if (this.viewAttached) return;
        
        this.viewAttached = true;
        this.element.after(this.view);
    } else {
        this.viewAttached = false;
        this.view.remove();

        if (this.viewOpen) {
            this.toggleView();
        }
    }
}

Password.prototype.toggleView = function(openClass = "fa-eye", closeClass = "fa-eye-slash") {
    if (typeof openClass !== "string") {
        throw TypeError("openClass argument must be a string.");
    } else if (typeof closeClass !== "string") {
        throw TypeError("closeClass argument must be a string.");
    }

    if (this.viewOpen) {
        this.viewOpen = false;
        this.element.type = "password";

        this.view.classList.remove(closeClass);
        this.view.classList.add(openClass);
    } else {
        this.viewOpen = true;
        this.element.type = "text";

        this.view.classList.remove(openClass);
        this.view.classList.add(closeClass);
    }
}

function ConfirmPassword(element, password) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Number constructor.`);
    }

    if (!(element instanceof HTMLElement)) {
        throw TypeError("element argument must be an HTML element.");
    } else if (element.type !== "password") {
        throw TypeError("element argument must be a password type input.");
    } else if (!(password instanceof HTMLElement)) {
        throw TypeError("password argument must be an HTML element.");
    } else if (password.type !== "password") {
        throw TypeError("password argument must be a password type input.");
    }

    this.element = element;
    this.password = password;

    new Password(this.element);
    this.element.addEventListener("input", this.validateInput.bind(this));
}

ConfirmPassword.prototype.validateInput = function() {
    if (this.element.value !== this.password.value) {
        this.element.setCustomValidity("Passwords do not match.");
    } else {
        this.element.setCustomValidity("");
    }
}

function AuthenticationCode(elements) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the AuthenticationNumber constructor.`);
    }

    if (!Array.isArray(elements)) {
        throw TypeError ("elements argument must be an array.");
    } else if (!elements.every(element => element instanceof HTMLElement)) {
        throw TypeError("elements argument must have HTML elements as elements.");
    } else if (!elements.every(element => element.type === "number")) {
        throw TypeError("elements argument must have HTML elements with number type inputs.");
    }

    this.elements = elements;
    this.reversedElements = [...this.elements].reverse();
    this.maxLength = 1;

    this.elements.forEach(element => {
        element.addEventListener("input", () => this.limitInput(element));
        element.addEventListener("focus", () => this.changeFocus());
        element.addEventListener("keydown", event => this.deleteInput(event));
    });
}

AuthenticationCode.prototype.limitInput = function(element) {
    if (!(element instanceof HTMLElement)) {
        throw TypeError("element argument must be an HTML element.");
    }

    const pattern = /^[0-9]$/;
    if (!pattern.test(element.value)) {
        const length = element.value.length;
        element.value = element.value.slice(0, length - 1);
    }

    if (element.value.length === this.maxLength) {
        this.changeFocus();
    }
}

AuthenticationCode.prototype.changeFocus = function() {
    for (const element of this.elements) {
        if (element.value.length !== this.maxLength) {
            element.focus();
            break;
        }
    }
}

AuthenticationCode.prototype.deleteInput = function(event) {
    if (event.code !== "Backspace") return;
    event.preventDefault();

    for (const element of this.reversedElements) {
        if (element.value.length === this.maxLength) {
            element.value = "";
            break;
        }
    }

    this.changeFocus();
}