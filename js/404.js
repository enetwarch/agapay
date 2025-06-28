window.addEventListener("DOMContentLoaded", () => {
    // This is a somewhat robust workaround to GitHub pages default deployment config.

    const timeoutId = setTimeout(() => {
        const redirectionLink = document.createElement("a");
        redirectionLink.href = "./";

        redirectionLink.click();    
    }, 3000);

    window.addEventListener("beforeunload", () => clearTimeout(timeoutId));
});
