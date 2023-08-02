const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const submitButton = document.querySelector(".submit-button");
const emailValue = emailInput.value;
const emailValueCap = emailValue.toLowerCase();

const errorMessage = document.querySelector(".error-message");

function validate(emailInput) {
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(emailInput);
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("border-red-500");
    } else {
      input.classList.add("border-green-500");
    }
  });
  if (validate(emailInput.value)) {
    console.log("worka");
    emailInput.classList.add("border-green-500");
    errorMessage.classList.add("hidden");
  } else {
    errorMessage.classList.remove("hidden");
    emailInput.classList.add("border-red-500");
  }
});

inputs.forEach((input) => {
  input.addEventListener("keyup", (event) => {
    if (input.value.length < 1) {
      input.classList.add("border-red-500");
    } else {
      input.classList.remove("border-red-500");
    }
  });
});
