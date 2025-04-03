import Warning from "./modules/warning.js";
import UI from "./controllers/ui.js";

document.addEventListener("contextmenu", event => event.preventDefault());

window.addEventListener("load", () => {
    const media = window.matchMedia("(max-width: 640px)");
    const iconClass = "fa-mobile-screen";
    const message = "Please view on mobile";

    const warning = new Warning(media, iconClass, message);

    const page = document.body.dataset.page;
    const ui = new UI(page);
});