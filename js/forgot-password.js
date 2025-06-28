window.addEventListener("DOMContentLoaded", () => {
    const controller = new AbortController();
    const signal = controller.signal;

    const forgotPasswordFormElement = document.getElementById("forgot-password-form");
    forgotPasswordFormElement.addEventListener("submit", event => {
        event.preventDefault();

        const formData = new FormData(forgotPasswordFormElement);
        const phoneNumber = formData.get("phone-number");

        alert(`A verification link has been sent to ${phoneNumber}.`);
    }, { signal });

    window.addEventListener("beforeunload", () => controller.abort());
});
