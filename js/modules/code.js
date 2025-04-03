export default function Code(element) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Code constructor.`);
    }

    if (!(element instanceof HTMLElement)) {
        throw TypeError("element argument must be an HTML element.");
    }

    this.element = element;

    this.cooldownInterval = null;
    this.onCooldown = false;
    this.cooldownSeconds = 10;

    this.element.addEventListener("click", () => this.send());
}

Code.prototype.send = function() {
    if (this.onCooldown) return;

    this.onCooldown = true;
    this.element.innerText = "Code sent successfully!";

    setTimeout(() => this.cooldown(), 2000);
}

Code.prototype.cooldown = function() {
    this.cooldownInterval = setInterval(() => {
        if (this.cooldownSeconds >= 0) {
            this.cooldownSeconds--;

            this.element.innerText = `Cooldown ${this.cooldownSeconds}s`;
        } else {
            clearInterval(this.cooldownInterval);
            this.onCooldown = false;
            this.cooldownSeconds = 10;

            this.element.innerText = "Resend Code";
        }
    }, 1000);
}