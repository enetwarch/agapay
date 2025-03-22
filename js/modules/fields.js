export default function Fields(type, fields) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Fields constructor.`);
    }
    switch (type) {
        case "nav": {
            new Nav(fields);
            break;
        }
        case "action": {
            new Action(fields);
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