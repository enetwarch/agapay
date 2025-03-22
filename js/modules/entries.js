export default function Entries(type, entries) {
    if (!new.target && this.constructor === Entries) {
        throw Error(`Use the "new" keyword on the Fields constructor.`);
    }
    this.type = type;
    this.entries = entries;
    this.container = document.createElement("div");
    this.container.classList.add(`${this.type}-container`);
    switch (this.type) {
        case "inbox": {
            this.entries.forEach(entry => this.createEntry(entry));
            const buttonContainerElement = document.getElementById("buttonContainer");
            buttonContainerElement.after(this.container);
            break;
        }
    }
}

Entries.prototype.createEntry = function(entry) {
    const entryElement = document.createElement("a");
    entryElement.classList.add(`${this.type}-entry`);
    const iconElement = document.createElement("i");
    iconElement.classList.add(`${this.type}-icon`, "fa-solid", "fa-envelope");
    const textElement = document.createElement("p");
    textElement.classList.add(`${this.type}-text`);
    textElement.innerText = entry;
    entryElement.append(iconElement, textElement);
    this.container.appendChild(entryElement);
}