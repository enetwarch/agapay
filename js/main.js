import UI from "./controllers/ui.js";

document.addEventListener("contextmenu", event => event.preventDefault());

window.addEventListener("load", () => {
    const page = document.body.dataset.page;
    const ui = new UI(page);
});
