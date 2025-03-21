import Form from "./modules/form.js";
import Modal from "./modules/modal.js";

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

const formElement = document.getElementById("form");
const modalFormElement = document.getElementById("modalForm");
const modalElement = document.getElementById("modal");
let pathName = window.location.pathname;
if (pathName.includes(".html")) pathName = pathName.replace(".html", "");

switch (pathName) {
    case "/sign-up": {
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
            modal.redirect("log-in");
        });
        break;
    }
    case "/log-in": {
        const modal = new Modal(modalElement);
        const form = new Form(formElement, () => {
            modal.showModal();
            modal.redirect("./");
        });
        break;
    }
    case "/forgot-password": {
        const modal = new Modal(modalElement);
        const form = new Form(formElement, () => modal.showModal());
        const modalForm = new Form(modalFormElement, () => {
            const header = "Success";
            const sentences = [
                "Password recovery successful.",
                "Check your notifications for more details.",
                "You will be directed to the log in page shortly."
            ];
            const information = sentences.join(" ");
            modal.changeModal(header, information);
            modal.redirect("log-in");
        });
        break;
    }
    default: {
        console.log(`${pathName} does not have any modifications.`);
    }
}