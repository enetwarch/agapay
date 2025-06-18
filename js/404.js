window.addEventListener("DOMContentLoaded", () => {
  // GitHub pages will have a domain name based on the current repo.
  // In this case, it would be "/agapay".

  const timeoutId = setTimeout(() => window.location.href = "/agapay", 3000);
  window.addEventListener("beforeunload", () => clearTimeout(timeoutId));
});
