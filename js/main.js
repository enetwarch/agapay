import Form from "./modules/form.js";
import Modal from "./modules/modal.js";
import Fields from "./modules/fields.js";
import Entries from "./modules/entries.js";

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
        warningIcon.classList.add("warning-icon", "fa-solid", "fa-mobile-screen");
        const warningText = document.createElement("h1");
        warningText.classList.add("warning-text");
        warningText.innerText = "Please view on mobile";
        warningContainer.append(warningIcon, warningText);
        warning.appendChild(warningContainer);
        document.body.appendChild(warning);
    }
}

let path = window.location.pathname;
path = path.split("/").slice(-1)[0];
path = path.replace(".html", "");
if (path === "") path = "agapay";

switch (path) {

    case "sign-up": {
        const modalElement = document.getElementById("modal");
        const successModalElement = document.getElementById("successModal");
        const formElement = document.getElementById("form");
        const modalFormElement = document.getElementById("modalForm");
        const modal = new Modal(modalElement);
        const successModal = new Modal(successModalElement);
        const form = new Form(formElement, () => modal.showModal());
        const modalForm = new Form(modalFormElement, () => {
            modal.closeModal();
            successModal.showModal();
            setTimeout(() => window.location.href = "log-in", 2000);
        });
        break;
    }

    case "log-in": {
        const modalElement = document.getElementById("modal");
        const formElement = document.getElementById("form");
        const modal = new Modal(modalElement);
        const form = new Form(formElement, () => {
            modal.showModal();
            setTimeout(() => window.location.href = "home", 2000);
        });
        break;
    }

    case "forgot-password": {
        const modalElement = document.getElementById("modal");
        const successModalElement = document.getElementById("successModal");
        const formElement = document.getElementById("form");
        const modalFormElement = document.getElementById("modalForm");
        const modal = new Modal(modalElement);
        const successModal = new Modal(successModalElement);
        const form = new Form(formElement, () => modal.showModal());
        const modalForm = new Form(modalFormElement, () => {
            modal.closeModal();
            successModal.showModal();
            setTimeout(() => window.location.href = "log-in", 2000);
        });
        break;
    }

    case "home": {
        const actionContainer = document.getElementById("actionContainer");
        const actionFields = [
            [undefined, "fa-file-invoice-dollar", "Pay"],
            [undefined, "fa-mobile", "Load"],
            [undefined, "fa-ticket", "Voucher"],
            [undefined, "fa-comments-dollar", "Send"],
            [undefined, "fa-store", "Market"],
            [undefined, "fa-gamepad", "Top Up"],
            [undefined, "fa-bitcoin-sign", "Crypto"],
            [undefined, "fa-ellipsis", "More"]
        ];
        const fields = new Fields("action", actionContainer, actionFields, path);
        fields.createNestedFields();
        const modalElement = document.getElementById("modal");
        const modal = new Modal(modalElement);
        const balanceCardActionFields = document.querySelectorAll(".balance-card-action-field");
        const actionInnerFields = document.querySelectorAll(".action-inner-field");
        const promoContainers = document.querySelectorAll(".promo-container");
        const comingSoon = [
            ...balanceCardActionFields,
            ...actionInnerFields,
            ...promoContainers
        ];
        comingSoon.forEach(element => {
            element.addEventListener("click", () => modal.showModal());
        });
        break;
    }

    case "inbox": {
        const inboxContainer = document.getElementById("inboxContainer");
        const inboxEntries = [
            "Purchased items worth ₱2,500 from SM Mall.",
            "Sent ₱1,200 to Jane Dela Cruz.",
            "Purchase ₱100 mobile load for Globe Telecom.",
            "Your transfer of ₱3,000 to Jollibee Store is pending...",
            "Successfully paid ₱850 for your water bill.",
            "Your ₱549 Netflix subscription has been renewed.",
            "You've earned ₱100 cashback from your purchase at Lazada.",
            "You paid ₱320 at Starbucks using QR code.",
            "Your Meralco electricity bill of ₱2,780 is due in 3 days.",
            "Congratulations! Your e-wallet account is now fully verified.",
            "Thank you for donating ₱500 to the Philippine Red Cross.",
            "Spotify Premium failed to auto pay due to insufficient funds.",
            "Your loan payment of ₱5,000 has been successfully processed."
        ];
        const entries = new Entries("inbox", inboxContainer, inboxEntries);
        entries.createEntries();
        break;
    }

    case "profile": {
        const menuContainer = document.getElementById("menuContainer");
        const menuFields = [
            [undefined, "fa-circle-check", "Account Verification"],
            [undefined, "fa-gear", "Setting"],
            [undefined, "fa-circle-question", "Help"],
            [undefined, "fa-right-from-bracket", "Log Out"]
        ];
        const fields = new Fields("menu", menuContainer, menuFields, path);
        fields.createNormalFields();
        break;
    }

}

switch (path) {
    case "home":
    case "cards":
    case "scan":
    case "inbox":
    case "profile": {
        const navContainer = document.createElement("div");
        navContainer.classList.add("nav-container");
        document.body.prepend(navContainer);
        const navFields = [
            ["home", "fa-house", "Home"],
            ["cards", "fa-credit-card", "Cards"],
            ["scan", "fa-qrcode", "Scan"],
            ["inbox", "fa-envelope", "Inbox"],
            ["profile", "fa-user", "Profile"]
        ];
        const fields = new Fields("nav", navContainer, navFields, path);
        fields.createNormalFields();
        break;
    }
}