window.addEventListener("DOMContentLoaded", () => {
  const controller = new AbortController();
  const signal = controller.signal;

  const loginFormElement = document.getElementById("login-form");
  loginFormElement.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "home";
  }, { signal });

  window.addEventListener("beforeunload", () => controller.abort());
});
