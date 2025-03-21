import Form from "./modules/form.js";
const form = document.getElementById("form");
const modal = document.getElementById("modal");
new Form(form, () => {
    modal.showModal();
    setTimeout(() => {
        window.location.href = "./";
    }, 2000);
});