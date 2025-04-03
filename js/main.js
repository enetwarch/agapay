import elements from "./data/elements.json" with { "type": "json" };

import Warning from "./modules/warning.js";
import Form from "./modules/form.js";
import Modal from "./modules/modal.js";
import Fields from "./modules/fields.js";
import Entries from "./modules/entries.js";

document.addEventListener("contextmenu", event => event.preventDefault());

window.addEventListener("load", () => {
    const media = window.matchMedia("(max-width: 640px)");
    const iconClass = "fa-mobile-screen";
    const message = "Please view on mobile";

    const warning = new Warning(media, iconClass, message);
});

const page = document.body.dataset.page;

switch (page) {

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
        const fields = new Fields("action", actionContainer, elements.fields.actions);
        break;
    }

    case "inbox": {
        const inboxContainer = document.getElementById("inboxContainer");
        const entries = new Entries("inbox", inboxContainer, elements.entries.inbox);
        break;
    }

    case "profile": {
        const menuContainer = document.getElementById("menuContainer");
        const fields = new Fields("menu", menuContainer, elements.fields.menu);
        break;
    }

}

switch (page) {
    case "home":
    case "cards":
    case "scan":
    case "inbox":
    case "profile": {
        const navContainer = document.getElementById("navContainer");
        const fields = new Fields("nav", navContainer, elements.fields.nav);
        break;
    }
}