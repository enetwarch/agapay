import Form from "./modules/form.js";

const mobile = window.matchMedia("(max-width: 640px)");
mobile.addEventListener("change", event => handleWarning(event));
document.addEventListener("contextmenu", event => event.preventDefault());
window.addEventListener("load", () => {
    handleWarning(mobile);
    const forms = document.querySelectorAll("form");
    forms.forEach(form => makeForm(form));
});

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

const formSubmit = {
    "/log-in": {
        "form": () => {
            showModal();
            setTimeout(() => {
                window.location.href = path;
            }, 2000);
        }
    },
    "/sign-up": {
        "form": () => showModal(),
        "modalForm": () => {
            const modalForm = document.getElementById("modalForm");
            const container = document.createElement("div");
            container.classList.add("content-container");
            const headerText = document.createElement("h1");
            headerText.classList.add("header-text");
            headerText.innerText = "Success";
            const informationText = document.createElement("p");
            informationText.classList.add("information-text");
            informationText.innerText = "Account created successfully. ";
            informationText.innerText += "You will be redirected to the log in page shortly";
            container.append(headerText, informationText);
            modalForm.innerHTML = "";
            modalForm.appendChild(container);
            setTimeout(() => {
                window.location.href = "log-in";
            }, 2000);
        }
    },
    "/forgot-password": {
        "form": () => showModal(),
        "modalForm": () => {
            const modalForm = document.getElementById("modalForm");
            const container = document.createElement("div");
            container.classList.add("content-container");
            const headerText = document.createElement("h1");
            headerText.classList.add("header-text");
            headerText.innerText = "Success";
            const informationText = document.createElement("p");
            informationText.classList.add("information-text");
            informationText.innerText = "Password recovery successful. ";
            informationText.innerText += "Check your notifications for more details. ";
            informationText.innerText += "You will be redirected to the log in page shortly";
            container.append(headerText, informationText);
            modalForm.innerHTML = "";
            modalForm.appendChild(container);
            setTimeout(() => {
                window.location.href = "log-in";
            }, 2000);
        }
    }
};

function makeForm(form) {
    let pathName = window.location.pathname;
    if (pathName.includes(".html")) pathName = pathName.replace(".html", "");
    const submit = formSubmit[pathName][form.id];
    new Form(form, submit);
}

function showModal() {
    const modal = document.getElementById("modal");
    const modalClose = document.getElementById("modalClose");
    if (modalClose) modalClose.addEventListener("click", () => modal.close());
    const phoneNumberModal = document.getElementById("phoneNumberModal");
    if (phoneNumberModal) {
        const phoneNumber = document.getElementById("phoneNumber");
        phoneNumberModal.innerText = phoneNumber.value;
    }
    const resendCode = document.getElementById("resendCode");
    if (resendCode) new ResendCode(resendCode);
    modal.showModal();
}

function ResendCode(resendCode) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the ResendCode constructor.`);
    }
    this.resendCode = resendCode;
    this.cooldownInterval;
    this.onCooldown = false;
    this.cooldownSeconds = 10;
    
}

ResendCode.prototype.sendCode = function() {
    if (this.onCooldown) return;
    this.onCooldown = true;
    this.resendCode.innerText = "Code sent successfully!";
    setTimeout(() => {
        startCooldown();
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
    });
}