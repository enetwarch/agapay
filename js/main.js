window.addEventListener("DOMContentLoaded", () => {
    const controller = new AbortController();
    const signal = controller.signal;

    document.addEventListener("contextmenu", (event) => event.preventDefault(), { signal });
    window.addEventListener("beforeunload", () => controller.abort());
});
