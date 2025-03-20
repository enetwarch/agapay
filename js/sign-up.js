const backArrowElement = document.getElementById("backArrow");
backArrowElement.addEventListener("click", () => {
    window.location.href = "./";
});

const signUpFormElement = document.getElementById("signUpForm");
const signUpModalElement = document.getElementById("signUpModal");
signUpFormElement.addEventListener("submit", event => {
    event.preventDefault();
    signUpModalElement.showModal();
});

const closeModalElement = document.getElementById("closeModal");
closeModalElement.addEventListener("click", () => {
    signUpModalElement.close();
});