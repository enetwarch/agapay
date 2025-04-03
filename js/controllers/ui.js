import elements from "../data/elements.json" with { "type": "json" };
import Modal from "../modules/modal.js";
import Form from "../modules/form.js";
import Code from "../modules/code.js";
import Fields from "../modules/fields.js";
import Entries from "../modules/entries.js";

export default function UI(page) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the UI constructor.`);
    }

    if (typeof page !== "string") {
        throw TypeError("page argument must be a string.");
    }

    UI.initializePage(page);
}

UI.initializePage = function(page) {
    switch (page) {
        case "index": return UI.initializeIndex();
        case "sign-up": return UI.initializeSignUp();
        case "log-in": return UI.initializeLogIn();
        case "forgot-password": return UI.initializeForgotPassword();
        case "home": return UI.initializeHome();
        case "cards": return UI.initializeCards();
        case "scan": return UI.initializeScan();
        case "inbox": return UI.initializeInbox();
        case "profile": return UI.initializeProfile();

        default: throw Error(`Unknown page: "${page}".`);
    }
}

UI.getElementById = function(id) {
    if (typeof id !== "string") {
        throw TypeError("id argument must be a string.");
    }

    const element = document.getElementById(id);
    if (!element) {
        throw Error(`"${id}" element id does not exist.`);
    }

    return element;
}

UI.initializeIndex = function() {
    // Nothing to initialize in index.html
}

UI.initializeSignUp = function() {
    const modalElement = UI.getElementById("modal");
    const modal = new Modal(modalElement);

    const formElement = UI.getElementById("form");
    const form = new Form(formElement);
    form.onSubmit(() => {
        const phoneNumberModal = UI.getElementById("phoneNumberModal");
        const phoneNumber = UI.getElementById("phoneNumber");
        phoneNumberModal.innerText = phoneNumber.value;

        modal.show();
    });

    const resendCodeElement = UI.getElementById("resendCode");
    const resendCode = new Code(resendCodeElement);

    const successModalElement = UI.getElementById("successModal");
    const successModal = new Modal(successModalElement);

    const modalFormElement = UI.getElementById("modalForm");
    const modalForm = new Form(modalFormElement);
    modalForm.onSubmit(() => {
        modal.close();
        successModal.show();

        setTimeout(() => window.location.href = "log-in", 2000);
    });
}

UI.initializeLogIn = function() {
    const modalElement = UI.getElementById("modal");
    const modal = new Modal(modalElement);

    const formElement = UI.getElementById("form");
    const form = new Form(formElement);
    form.onSubmit(() => {
        modal.show();

        setTimeout(() => window.location.href = "home", 2000);
    });
}

UI.initializeForgotPassword = function() {
    const modalElement = UI.getElementById("modal");
    const modal = new Modal(modalElement);

    const successModalElement = UI.getElementById("successModal");
    const successModal = new Modal(successModalElement);

    const formElement = UI.getElementById("form");
    const form = new Form(formElement);
    form.onSubmit(() => {
        const phoneNumberModal = UI.getElementById("phoneNumberModal");
        const phoneNumber = UI.getElementById("phoneNumber");
        phoneNumberModal.innerText = phoneNumber.value;

        modal.show();
    });

    const resendCodeElement = UI.getElementById("resendCode");
    const resendCode = new Code(resendCodeElement);

    const modalFormElement = UI.getElementById("modalForm");
    const modalForm = new Form(modalFormElement);
    modalForm.onSubmit(() => {
        modal.close();
        successModal.show();

        setTimeout(() => window.location.href = "log-in", 2000);
    });
}

UI.initializeNav = function() {
    const navContainer = document.getElementById("navContainer");
    const fields = new Fields("nav", navContainer, elements.fields.nav);
}

UI.initializeHome = function() {
    const actionContainer = document.getElementById("actionContainer");
    const fields = new Fields("action", actionContainer, elements.fields.actions);

    UI.initializeNav();
}

UI.initializeCards = function() {
    UI.initializeNav();
}

UI.initializeScan = function() {
    UI.initializeNav();
}

UI.initializeInbox = function() {
    const inboxContainer = document.getElementById("inboxContainer");
    const entries = new Entries("inbox", inboxContainer, elements.entries.inbox);

    UI.initializeNav();
}

UI.initializeProfile = function() {
    const menuContainer = document.getElementById("menuContainer");
    const fields = new Fields("menu", menuContainer, elements.fields.menu);

    UI.initializeNav();
}