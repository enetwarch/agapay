window.addEventListener("DOMContentLoaded", () => {
  const timeoutId = setTimeout(() => window.location.href = "/", 3000);
  window.addEventListener("beforeunload", () => clearTimeout(timeoutId));
});
