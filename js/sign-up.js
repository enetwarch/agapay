window.addEventListener("DOMContentLoaded", () => {
  const controller = new AbortController();
  const signal = controller.signal;

  const signupFormElement = document.getElementById("signup-form");
  signupFormElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(signupFormElement);
    const phoneNumber = formData.get("phone-number");

    alert(`A verification link has been sent to ${phoneNumber}.`);
  }, { signal });

  window.addEventListener("beforeunload", () => controller.abort());
});
