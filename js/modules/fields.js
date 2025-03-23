export default function Fields(type, container, fields, path) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Fields constructor.`);
    }
    this.type = type;
    this.container = container;
    this.fields = fields;
    this.path = path;
}

Fields.prototype.createNormalFields = function() {
    this.fields.forEach(field => {
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
    });
}

Fields.prototype.createNestedFields = function() {
    this.fields.forEach(field => {
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
    });
}