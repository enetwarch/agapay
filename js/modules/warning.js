export default function Warning(media, icon, message) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Warning constructor.`);
    }

    if (!(media instanceof MediaQueryList)) {
        throw TypeError("media argument must be a MediaQueryList object.");
    } else if (typeof icon !== "string") {
        throw TypeError("icon argument must be a string.");
    } else if (typeof message !== "string") {
        throw TypeError("message argument must be a string.");
    }

    this.media = media;
    this.icon = icon;
    this.message = message;

    this.media.addEventListener("change", event => this.handle(event));
    this.handle(this.media);
}

Warning.prototype.handle = function(event) {
    if (!(event instanceof Event || event instanceof MediaQueryList)) {
        throw TypeError("event argument must be an Event or MediaQueryList object.");
    }

    event.matches ? this.remove() : this.display();
}

Warning.prototype.display = function(warning = "warning", container = "warning-container", icon = ["warning-icon", "fa-solid"], text = "warning-text") {
    if (typeof warning !== "string") {
        throw TypeError("warning argument must be a string.");
    } else if (typeof container !== "string") {
        throw TypeError("container argument must be a string.");
    } else if (!Array.isArray(icon)) {
        throw TypeError("icon argument must be an array.");
    } else if (!icon.every(className => typeof className === "string")) {
        throw TypeError("icon argument must be an array with string elements.");
    } else if (typeof text !== "string") {
        throw TypeError("text argument must be a string.");
    }

    const warningElement = document.createElement("div");
    warningElement.classList.add(warning);
    warningElement.id = warning;

    const containerElement = document.createElement("div");
    containerElement.classList.add(container);

    const iconElement = document.createElement("i");
    iconElement.classList.add(...icon, this.icon);

    const textElement = document.createElement("h1");
    textElement.classList.add(text);
    textElement.innerText = this.message;

    containerElement.append(iconElement, textElement);
    warningElement.appendChild(containerElement);
    document.body.appendChild(warningElement);
}

Warning.prototype.remove = function(id = "warning") {
    if (typeof id !== "string") {
        throw TypeError("id argument must be a string.");
    }

    const warning = document.getElementById(id);
    if (!warning) return;

    warning.remove();
}