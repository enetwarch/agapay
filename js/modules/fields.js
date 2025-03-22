export default function Fields(type, fields) {
    if (!new.target && this.constructor === Fields) {
        throw Error(`Use the "new" keyword on the Fields constructor.`);
    }
    this.type = type;
    this.fields = fields;
    this.path = window.location.pathname;
    this.path = this.path.split("/").slice(-1)[0];
    this.path = this.path.replace(".html", "");
    this.container = document.createElement("div");
    this.container.classList.add(`${this.type}-container`);
    if (this.path === "") this.path = "agapay";
    switch (this.type) {
        case "nav": {
            this.fields.forEach(field => this.createNormalField(field));
            document.body.prepend(this.container);
            break;
        }
        case "action": {
            this.fields.forEach(field => this.createNestedField(field));
            const balanceCardElement = document.getElementById("balanceCard");
            balanceCardElement.after(this.container);
            break;
        }
        case "menu": {
            this.fields.forEach(field => this.createNormalField( field));
            const profileElement = document.getElementById("profile");
            profileElement.after(this.container);
            break;
        }
    }
}

Fields.prototype.createNormalField = function(field) {
    const href = field[0];
    const icon = field[1];
    const text = field[2];
    const fieldElement = document.createElement("a");
    fieldElement.classList.add(`${this.type}-field`);
    if (href) fieldElement.href = href;
    const iconElement = document.createElement("i");
    iconElement.classList.add(`${this.type}-icon`, "fa-solid", icon);
    const textElement = document.createElement("p");
    textElement.classList.add(`${this.type}-text`);
    textElement.innerText = text;
    fieldElement.append(iconElement, textElement);
    if (this.path === href) fieldElement.id = "currentPage";
    this.container.appendChild(fieldElement);
}

Fields.prototype.createNestedField = function(field) {
    const href = field[0];
    const icon = field[1];
    const text = field[2];
    const outerFieldElement = document.createElement("div");
    outerFieldElement.classList.add(`${this.type}-outer-field`);
    const innerFieldElement = document.createElement("a");
    innerFieldElement.classList.add(`${this.type}-inner-field`);
    if (href) innerFieldElement.href = href;
    const iconElement = document.createElement("i");
    iconElement.classList.add(`${this.type}-icon`, "fa-solid", icon);
    const textElement = document.createElement("p");
    textElement.classList.add(`${this.type}-text`);
    textElement.innerText = text;
    innerFieldElement.append(iconElement, textElement);
    if (this.path === href) innerFieldElement.id = "currentPage";
    outerFieldElement.appendChild(innerFieldElement);
    this.container.appendChild(outerFieldElement);
}