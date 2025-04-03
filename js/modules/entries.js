export default function Entries(name, container, entries) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Fields constructor.`);
    }

    if (typeof name !== "string") {
        throw TypeError("name argument must be a string.");
    } else if (!(container instanceof HTMLElement)) {
        throw TypeError("container argument must be an HTML element.");
    } else if (!Array.isArray(entries)) {
        throw TypeError("entries argument must be an array.");
    }

    this.name = name;
    this.container = container;
    this.entries = entries;

    this.entryClass = `${this.name}-entry`;
    this.iconClassList = [`${this.name}-icon`, "fa-solid", "fa-envelope"];
    this.textClass = `${this.name}-text`;

    this.entries.forEach(entry => this.display(entry));
}

Entries.prototype.display = function(entry) {
    if (typeof entry !== "string") {
        throw TypeError("entry argument must be a string.");
    }

    const entryElement = document.createElement("div");
    entryElement.classList.add(this.entryClass);

    const iconElement = document.createElement("i");
    iconElement.classList.add(...this.iconClassList);

    const textElement = document.createElement("p");
    textElement.classList.add(this.textClass);
    textElement.innerText = entry;

    entryElement.append(iconElement, textElement);
    this.container.appendChild(entryElement);
}