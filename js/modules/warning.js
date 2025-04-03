export default function Warning(media, iconClass, message) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the Warning constructor.`);
    }

    if (!(media instanceof MediaQueryList)) {
        throw TypeError("media argument must be a MediaQueryList object.");
    } else if (typeof iconClass !== "string") {
        throw TypeError("icon argument must be a string.");
    } else if (typeof message !== "string") {
        throw TypeError("message argument must be a string.");
    }

    this.media = media;
    this.iconClass = iconClass;
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

Warning.prototype.display = function(warningClass = "warning", containerClass = "warning-container", iconClassList = ["warning-icon", "fa-solid"], textClass = "warning-text") {
    if (typeof warningClass !== "string") {
        throw TypeError("warningClass argument must be a string.");
    } else if (typeof containerClass !== "string") {
        throw TypeError("containerClass argument must be a string.");
    } else if (!Array.isArray(iconClassList)) {
        throw TypeError("iconClassList argument must be an array.");
    } else if (!iconClassList.every(className => typeof className === "string")) {
        throw TypeError("iconClassList argument must be an array with string elements.");
    } else if (typeof textClass !== "string") {
        throw TypeError("textClass argument must be a string.");
    }

    const warningElement = document.createElement("div");
    warningElement.classList.add(warningClass);
    warningElement.id = warningClass;

    const containerElement = document.createElement("div");
    containerElement.classList.add(containerClass);

    const iconElement = document.createElement("i");
    iconElement.classList.add(...iconClassList, this.iconClass);

    const textElement = document.createElement("h1");
    textElement.classList.add(textClass);
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