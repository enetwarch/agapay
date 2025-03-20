export default function Password(input, location) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Password constructor.`);
    }
    this.input = input;
    const view = document.createElement("i");
    view.classList.add(`${location}__password-view`, "fa-solid", "fa-eye");
    this.view = view;
    this.open = false;
    this.addListeners();
}

Password.prototype.addListeners = function() {
    this.input.addEventListener("input", () => this.attachView());
    this.view.addEventListener("click", () => this.toggleView());
}

Password.prototype.attachView = function() {
    if (this.input.value.length > 0) {
        this.input.after(this.view);
    } else {
        this.view.remove();
        if (this.open) this.toggleView();
    }
}

Password.prototype.toggleView = function() {
    if (this.open) {
        this.input.type = "password";
        this.view.classList.remove("fa-eye-slash");
        this.view.classList.add("fa-eye");
        this.open = false;
    } else {
        this.input.type = "text";
        this.view.classList.remove("fa-eye");
        this.view.classList.add("fa-eye-slash");
        this.open = true;
    }
}