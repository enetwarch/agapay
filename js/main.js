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
        warningIcon.classList.add("warning-icon", "fa-solid", "fa-mobile-screen");
        const warningText = document.createElement("h1");
        warningText.classList.add("warning-text");
        warningText.innerText = "Please view on mobile";
        warningContainer.append(warningIcon, warningText);
        warning.appendChild(warningContainer);
        document.body.appendChild(warning);
    }
}

let pathName = window.location.pathname;
pathName = pathName.split("/").slice(-1)[0];
pathName = pathName.replace(".html", "");
if (pathName === "") pathName = "agapay";
switch (pathName) {
    case "sign-up": {
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
    case "log-in": {
        const modalElement = document.getElementById("modal");
        const formElement = document.getElementById("form");
        const modal = new Modal(modalElement);
        const form = new Form(formElement, () => {
            modal.showModal();
            redirect("home");
        });
        break;
    }
    case "forgot-password": {
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

function redirect(href) {
    setTimeout(() => {
        window.location.href = href;
    }, 2000);
}