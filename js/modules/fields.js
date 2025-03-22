export default function Fields(type, fields) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Fields constructor.`);
    }
    this.type = type;
    this.fields = fields;
    switch (type) {
        case "nav": {
            new Nav(fields);
            break;
        }
        case "action": {
            new Action(fields);
            break;
        }
        case "menu": {
            new Menu(fields);
            break;
        }
    }
}

function Nav(fields) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Nav constructor.`);
    }
    this.path = window.location.pathname;
    this.path = this.path.split("/").slice(-1)[0];
    this.path = this.path.replace(".html", "");
    if (this.path === "") this.path = "agapay";
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

function Action(fields) {
    if (!new.target) {
        throw Error (`Use the "new" keyword on the Action constructor.`);
    }
    this.action = document.createElement("div");
    this.action.classList.add("action-container");
    fields.forEach(field => this.makeField(field));
    const balanceCardElement = document.getElementById("balanceCard");
    balanceCardElement.after(this.action);
}

Action.prototype.makeField = function(field) {
    const icon = field[0];
    const text = field[1];
    const outerFieldElement = document.createElement("div");
    outerFieldElement.classList.add("action-outer-field");
    const innerFieldElement = document.createElement("a");
    innerFieldElement.classList.add("action-inner-field");
    const iconElement = document.createElement("i");
    iconElement.classList.add("action-icon", "fa-solid", icon);
    const textElement = document.createElement("p");
    textElement.classList.add("action-text");
    textElement.innerText = text;
    innerFieldElement.append(iconElement, textElement);
    outerFieldElement.appendChild(innerFieldElement);
    this.action.appendChild(outerFieldElement);
}

function Menu(fields) {
    if (!new.target) {
        throw Error (`Use the "new" keyword on the Menu constructor`);
    }
    this.menu = document.createElement("div");
    this.menu.classList.add("menu-container");
    fields.forEach(field => this.makeField(field));
    const profileElement = document.getElementById("profile");
    profileElement.after(this.menu);
}

Menu.prototype.makeField = function(field) {
    const icon = field[0];
    const text = field[1];
    const fieldElement = document.createElement("menu-field");
    fieldElement.classList.add("menu-field");
    const iconElement = document.createElement("i");
    iconElement.classList.add("menu-icon", "fa-solid", icon);
    const textElement = document.createElement("p");
    textElement.classList.add("menu-text");
    textElement.innerText = text;
    fieldElement.append(iconElement, textElement);
    this.menu.appendChild(fieldElement);
}