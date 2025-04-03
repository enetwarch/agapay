export default function Entries(type, container, entries) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Fields constructor.`);
    }

    if (typeof type !== "string") {
        throw TypeError("type argument must be a string.");
    } else if (!(container instanceof HTMLElement)) {
        throw TypeError("container argument must be an HTML element.");
    } else if (!Array.isArray(entries)) {
        throw TypeError("entries argument must be an array.");
    }

    this.type = type;
    this.container = container;
    this.entries = entries;

    this.entries.forEach(entry => this.display(entry));
}

Entries.prototype.display = function(entry, entryClass = `${this.type}-entry`, iconClassList = [`${this.type}-icon`, "fa-solid", "fa-envelope"], textClass = `${this.type}-text`) {
    if (typeof entry !== "string") {
        throw TypeError("entry argument must be a string.");
    } else if (typeof entryClass !== "string") {
        throw TypeError("entryClass argument must be a string.");
    } else if (!Array.isArray(iconClassList)) {
        throw TypeError("iconClassList argument must be an array.");
    } else if (!iconClassList.every(className => typeof className === "string")) {
        throw TypeError("iconClassList argument must be an array with string arguments.");
    } else if (typeof textClass !== "string") {
        throw TypeError("textClass argument must be a string.");
    }

    const entryElement = document.createElement("div");
    entryElement.classList.add(entryClass);

    const iconElement = document.createElement("i");
    iconElement.classList.add(...iconClassList);

    const textElement = document.createElement("p");
    textElement.classList.add(textClass);
    textElement.innerText = entry;

    entryElement.append(iconElement, textElement);
    this.container.appendChild(entryElement);
}