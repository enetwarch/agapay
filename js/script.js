const mobile = window.matchMedia("(max-width: 640px)");
mobile.addEventListener("change", event => handleWarning(event));
document.addEventListener("contextmenu", event => event.preventDefault());
window.addEventListener("load", () => handleWarning(mobile));

function handleWarning(event) {
    if (event.matches) {
        const warning = document.querySelector(".warning");
        if (warning) warning.remove();
    } else {
        const warning = document.createElement("div");
        warning.classList.add("warning");
        const warningContainer = document.createElement("div");
        warningContainer.classList.add("warning-container");
        const warningIcon = document.createElement("i");
        warningIcon.classList.add("warning-icon", "fa-solid", "fa-mobile");
        const warningText = document.createElement("h1");
        warningText.classList.add("warning-text");
        warningText.innerText = "Please view on mobile";
        warningContainer.append(warningIcon, warningText);
        warning.appendChild(warningContainer);
        document.body.appendChild(warning);
    }
}

let pathName = window.location.pathname;
if (pathName.includes(".html")) pathName = pathName.replace(".html", "");

window.addEventListener("DOMContentLoaded", () => {
    switch (pathName) {
        case "/sign-up": {
            const modalElement = document.getElementById("modal");
            const formElement = document.getElementById("form");
            const modalFormElement = document.getElementById("modalForm");
            const modal = new Modal(modalElement);
            const form = new Form(formElement, () => modal.showModal());
            const modalForm = new Form(modalFormElement, () => {
                const header = "Success";
                const sentences = [
                    "Account created successfully.",
                    "You will be redirected to the log in page shortly."
                ];
                const information = sentences.join(" ");
                modal.changeModal(header, information);
                redirect("log-in");
            });
            break;
        }
        case "/log-in": {
            const modalElement = document.getElementById("modal");
            const formElement = document.getElementById("form");
            const modal = new Modal(modalElement);
            const form = new Form(formElement, () => {
                modal.showModal();
                redirect("./");
            });
            break;
        }
        case "/forgot-password": {
            const modalElement = document.getElementById("modal");
            const formElement = document.getElementById("form");
            const modalFormElement = document.getElementById("modalForm");
            const modal = new Modal(modalElement);
            const form = new Form(formElement, () => modal.showModal());
            const modalForm = new Form(modalFormElement, () => {
                const header = "Success";
                const sentences = [
                    "Password recovery successful.",
                    "Check your notifications for more details.",
                    "You will be redirected to the log in page shortly."
                ];
                const information = sentences.join(" ");
                modal.changeModal(header, information);
                redirect("log-in");
            });
            break;
        }
    }    
});

function redirect(href) {
    setTimeout(() => {
        window.location.href = href;
    }, 2000);
}

function Form(form, submit) {
    if (!new.target) {
        throw Error (`Use the "new" keyword on the Form constructor`);
    }
    this.form = form;
    this.submit = submit;
    this.inputs = this.form.querySelectorAll("input");
    this.inputs.forEach(input => this.constructInput(input));
    this.codeNumbers = this.form.querySelectorAll(".form-field-code-input");
    if (this.codeNumbers) new CodeNumbers(this.codeNumbers);
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
        this.input.value = this.input.value.slice(0, this.maxLength);
    }
}

PhoneNumber.prototype.validateInput = function(event) {
    event.preventDefault();
    if (this.input.value.length < this.minLength) {
        const validity = `Minimum phone number character length is ${this.minLength}.`;
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
        this.input.value = this.input.value.slice(0, length);
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

function CodeNumbers(inputs) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the AuthenticationNumber constructor.`);
    }
    this.inputs = inputs;
    this.maxLength = 1;
    this.inputs.forEach(input => {
        input.addEventListener("input", () => this.limitInput(input));
        input.addEventListener("focus", () => this.changeFocus());
        input.addEventListener("keydown", event => this.deleteNumber(event));
    });
}

CodeNumbers.prototype.limitInput = function(input) {
    const pattern = /^[0-9]$/;
    if (!pattern.test(input.value)) {
        const length = input.value.length;
        input.value = input.value.slice(0, length - 1);
    }
    if (input.value.length === this.maxLength) this.changeFocus();
}

CodeNumbers.prototype.changeFocus = function() {
    for (const input of this.inputs) {
        if (input.value.length === this.maxLength) continue;
        input.focus();
        return;
    }
}

CodeNumbers.prototype.deleteNumber = function(event) {
    if (event.code !== "Backspace") return; 
    event.preventDefault();
    const reversedInputsArray = Array.from(this.inputs).reverse();
    for (const input of reversedInputsArray) {
        if (input.value.length === this.maxLength) {
            input.value = "";
            break;
        }
    }
    this.changeFocus();
}

function Modal(modal) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Modal constructor.`);
    }
    this.modal = modal;
    this.modalContainer = modal.querySelector(".modal-container");
    this.modalClose = modal.querySelector("#modalClose");
    if (this.modalClose) this.modalClose.addEventListener("click", () => this.modal.close());
    this.phoneNumberModal = modal.querySelector("#phoneNumberModal");
    this.resendCode = modal.querySelector("#resendCode");
    if (this.resendCode) new ResendCode(this.resendCode);
}

Modal.prototype.showModal = function() {
    if (this.phoneNumberModal) {
        const phoneNumber = document.getElementById("phoneNumber");
        this.phoneNumberModal.innerText = phoneNumber.value;
    }
    this.modal.showModal();
}

Modal.prototype.changeModal = function(header, information) {
    const container = document.createElement("div");
    container.classList.add("content-container");
    const headerText = document.createElement("h1");
    headerText.classList.add("header-text");
    headerText.innerText = header;
    const informationText = document.createElement("p");
    informationText.classList.add("information-text");
    informationText.innerText = information;
    container.append(headerText, informationText);
    this.modalContainer.innerHTML = "";
    this.modalContainer.appendChild(container);

}

function ResendCode(resendCode) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the ResendCode constructor.`);
    }
    this.resendCode = resendCode;
    this.cooldownInterval;
    this.onCooldown = false;
    this.cooldownSeconds = 10;
    this.resendCode.addEventListener("click", () => this.sendCode());
    
}

ResendCode.prototype.sendCode = function() {
    if (this.onCooldown) return;
    this.onCooldown = true;
    this.resendCode.innerText = "Code sent successfully!";
    setTimeout(() => {
        this.startCooldown();
    }, 2000);
}

ResendCode.prototype.startCooldown = function() {
    this.cooldownInterval = setInterval(() => {
        if (this.cooldownSeconds < 0) {
            clearInterval(this.cooldownInterval);
            this.onCooldown = false;
            this.cooldownSeconds = 10;
            this.resendCode.innerText = "Resend Code";
            return;
        }
        const cooldownTimer = `Resend cooldown ${this.cooldownSeconds}s`;
        this.resendCode.innerText = cooldownTimer;
        this.cooldownSeconds--;
    }, 1000);
}