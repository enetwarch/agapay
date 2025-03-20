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

const forgotPasswordForm = document.getElementById("forgotPasswordForm");
const phoneNumberModal = document.getElementById("phoneNumberModal");
const forgotPasswordModal = document.getElementById("forgotPasswordModal");
forgotPasswordForm.addEventListener("submit", event => {
    event.preventDefault();
    // Internationally, phone numbers have a minimum of 7 characters.
    // Source: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html
    const minLength = 7;
    if (phoneNumber.value.length < minLength) {
        const validity = `Minimum phone number character length is ${minLength}.`;
        phoneNumber.setCustomValidity(validity);
    }
    if (forgotPasswordForm.checkValidity()) {
        phoneNumberModal.innerText = phoneNumber.value;
        forgotPasswordModal.showModal();
    } else {
        forgotPasswordForm.reportValidity();
    }
});

const closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", () => {
    forgotPasswordModal.close();
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

const forgotPasswordModalForm = document.getElementById("forgotPasswordModalForm");
forgotPasswordModalForm.addEventListener("submit", event => {
    event.preventDefault();
    const container = document.createElement("div");
    container.classList.add("sign-up__container");
    const headerText = document.createElement("h1");
    headerText.classList.add("sign-up__header-text");
    headerText.innerText = "Success";
    const informationText = document.createElement("p");
    informationText.classList.add("sign-up__information-text");
    informationText.innerText = "Password recovery successful. ";
    informationText.innerText += "Check your notifications for more details. ";
    informationText.innerText += "You will be redirected to the log in page shortly";
    container.append(headerText, informationText);
    forgotPasswordModalForm.innerHTML = "";
    forgotPasswordModalForm.appendChild(container);
    setTimeout(() => {
        window.location.href = "log-in";
    }, 2000);
});