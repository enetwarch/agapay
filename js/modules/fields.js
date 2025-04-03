export default function Fields(name, container, fields) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Fields constructor.`);
    }

    if (typeof name !== "string") {
        throw TypeError("name argument must be a string.");
    } else if (!(container instanceof HTMLElement)) {
        throw TypeError("container argument must be an HTML element.");
    } else if (!Array.isArray(fields)) {
        throw TypeError("fields argument must be an array.");
    }

    this.name = name;
    this.container = container;
    this.fields = fields;
    this.page = document.body.dataset.page;

    this.fieldClass = `${this.name}-field`;
    this.outerFieldClass = `${this.name}-outer-field`;
    this.innerFieldClass = `${this.name}-inner-field`;

    this.iconClassList = [`${this.name}-icon`, "fa-solid"];
    this.textClass = `${this.name}-text`;

    this.fields.forEach(field => this.display(field));
}

Fields.validateFieldArgument = function(field) {
    if (!("type" in field)) {
        throw TypeError(`fields have a "type" key.`);
    } else if (!("href" in field)) {
        throw TypeError(`fields have a "href" key.`);
    } else if (!("iconClass" in field)) {
        throw TypeError(`fields have a "iconClass" key.`);
    } else if (!("text" in field)) {
        throw TypeError(`fields have a "text" key.`);
    } else if (typeof field.type !== "string") {
        throw TypeError(`"type" key must be a string.`);
    } else if (typeof field.href !== "string") {
        throw TypeError(`"href" key must be a string.`);
    } else if (typeof field.iconClass !== "string") {
        throw TypeError(`"iconClass" key must be a string.`);
    } else if (typeof field.text !== "string") {
        throw TypeError(`"text" key must be a string.`);
    }
}

Fields.prototype.display = function(field) {
    Fields.validateFieldArgument(field);

    if (field.type === "normal") {
        this.displayNormal(field);
    } else if (field.type === "nested") {
        this.displayNested(field);
    } else {
        throw TypeError(`type argument can only be "normal" or "nested".`);
    }
}

Fields.prototype.displayNormal = function(field) {
    Fields.validateFieldArgument(field);
    const { href, iconClass, text } = field;

    const fieldElement = document.createElement("a");
    fieldElement.classList.add(this.fieldClass);
    fieldElement.href = href;
    if (this.page === href) {
        fieldElement.id = "currentPage";
    }

    const iconElement = document.createElement("i");
    iconElement.classList.add(...this.iconClassList, iconClass);

    const textElement = document.createElement("p");
    textElement.classList.add(this.textClass);
    textElement.innerText = text;

    fieldElement.append(iconElement, textElement);
    this.container.appendChild(fieldElement);
}

Fields.prototype.displayNested = function(field) {
    Fields.validateFieldArgument(field);
    const { href, iconClass, text } = field;

    const outerFieldElement = document.createElement("div");
    outerFieldElement.classList.add(this.outerFieldClass);

    const innerFieldElement = document.createElement("a");
    innerFieldElement.classList.add(this.innerFieldClass);
    innerFieldElement.href = href;
    if (this.page === href) {
        innerFieldElement.id = "currentPage";
    }

    const iconElement = document.createElement("i");
    iconElement.classList.add(...this.iconClassList, iconClass);

    const textElement = document.createElement("p");
    textElement.classList.add(this.textClass);
    textElement.innerText = text;

    innerFieldElement.append(iconElement, textElement);
    outerFieldElement.appendChild(innerFieldElement);
    this.container.appendChild(outerFieldElement);    
}