export default function Nav(path, fields) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Nav constructor.`);
    }
    this.path = path;
    this.fields = fields;
    this.nav = document.createElement("div");
    this.nav.classList.add("nav-container");
    fields.forEach(field => this.makeField(field));
    document.body.prepend(this.nav);
}

Nav.prototype.makeField = function(field) {
    const href = field[0];
    const icon = field[1];
    const text = field[2];
    const fieldElement = document.createElement("a");
    fieldElement.classList.add("nav-field");
    fieldElement.href = href;
    const iconElement = document.createElement("i");
    iconElement.classList.add("nav-icon", "fa-solid", icon);
    const textElement = document.createElement("p");
    textElement.classList.add("nav-text");
    textElement.innerText = text;
    fieldElement.append(iconElement, textElement);
    if (this.path === href) {
        fieldElement.id = "currentPage";
    }
    this.nav.appendChild(fieldElement);
}