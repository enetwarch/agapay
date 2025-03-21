const htmlLocation = "sign-up";
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
confirmPassword.addEventListener("input", () => {
    confirmPassword.setCustomValidity("");
});

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
new Password(confirmPassword);

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

const signUpForm = document.getElementById("signUpForm");
const signUpModal = document.getElementById("signUpModal");
signUpForm.addEventListener("submit", event => {
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
    if (signUpForm.checkValidity()) {
        signUpModal.showModal();
    } else {
        signUpForm.reportValidity();
    }
});

const closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", () => {
    signUpModal.close();
});

const authNumbers = document.querySelectorAll("#authNumbers > *");
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

let cooldownInterval;
let onCooldown = false;
let cooldownSeconds = 10;

const resendCode = document.getElementById("resendCode");
resendCode.addEventListener("click", () => {
    if (onCooldown) return;
    onCooldown = true;
    resendCode.innerText = "Code sent successfully!";
    setTimeout(() => {
        startCooldown();
    }, 2000);
});

function startCooldown() {
    cooldownInterval = setInterval(() => {
        if (cooldownSeconds < 0) {
            clearInterval(cooldownInterval);
            onCooldown = false;
            cooldownSeconds = 10;
            resendCode.innerText = "Resend Code";
            return;
        }
        const cooldownTimer = `Resend cooldown ${cooldownSeconds}s`;
        resendCode.innerText = cooldownTimer;
        cooldownSeconds--;
    }, 1000);
}

const signUpModalForm = document.getElementById("signUpModalForm");
signUpModalForm.addEventListener("submit", event => {
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
    signUpModalForm.innerHTML = "";
    signUpModalForm.appendChild(container);
    setTimeout(() => {
        window.location.href = "log-in";
    }, 2000);
});