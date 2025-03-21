const mobile = window.matchMedia("(max-width: 640px)");
mobile.addEventListener("change", handleWarning);
window.addEventListener("load", () => {
    handleWarning(mobile);
});

function handleWarning(event) {
    if (event.matches) {
        const warning = document.querySelector(".warning");
        if (warning) warning.remove();
    } else {
        const warning = document.createElement("div");
        warning.classList.add("warning");
        const warningContainer = document.createElement("div");
        warningContainer.classList.add("warning-container");
        const warningIcon = document.createElement("i");
        warningIcon.classList.add("warning-icon", "fa-solid", "fa-mobile");
        const warningText = document.createElement("h1");
        warningText.classList.add("warning-text");
        warningText.innerText = "Please view on mobile";
        warningContainer.append(warningIcon, warningText);
        warning.appendChild(warningContainer);
        document.body.appendChild(warning);
    }
}

document.addEventListener("contextmenu", event => {
    event.preventDefault();
});