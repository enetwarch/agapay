export default function Entries(type, container, entries) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Fields constructor.`);
    }
    this.type = type;
    this.container = container;
    this.entries = entries;
}

Entries.prototype.createEntries = function() {
    this.entries.forEach(entry => {
        const entryElement = document.createElement("a");
        entryElement.classList.add(`${this.type}-entry`);
        const iconElement = document.createElement("i");
        iconElement.classList.add(`${this.type}-icon`, "fa-solid", "fa-envelope");
        const textElement = document.createElement("p");
        textElement.classList.add(`${this.type}-text`);
        textElement.innerText = entry;
        entryElement.append(iconElement, textElement);
        this.container.appendChild(entryElement);    
    })
}