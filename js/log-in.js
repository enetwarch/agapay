window.addEventListener("DOMContentLoaded", () => {
  const controller = new AbortController();
  const signal = controller.signal;

  const loginFormElement = document.getElementById("login-form");
  loginFormElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const redirectionLink = document.createElement("a");
    redirectionLink.href = "./dashboard";

    redirectionLink.click();    
  }, { signal });

  window.addEventListener("beforeunload", () => controller.abort());
});
