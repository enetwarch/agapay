export default function Modal(modal) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Modal constructor.`);
    }
    this.modal = modal;
    this.modalContainer = modal.querySelector(".modal-container");
    this.modalClose = modal.querySelector("#modalClose");
    if (modalClose) this.modalClose.addEventListener("click", () => this.modal.close());
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

Modal.prototype.redirect = function(href) {
    setTimeout(() => {
        window.location.href = href;
    }, 2000);
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