const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const errorMessage = document.querySelector(".error-message");

function validate(emailInput) {
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailPatternLow = emailPattern.toLowerCase();

  // Check if the email matches the pattern
  return emailPatternLow.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("border-red-500");
    } else {
      input.classList.add("border-green-500");
    }
    // if (!validate(enail)) {
    //   console.log("worka");
    //   errorMessage.classList.add("block");
    // }
  });
  if (validate(emailInput.value)) {
    console.log("worka");
    emailInput.classList.add("border-green-500");
  } else {
    errorMessage.classList.add("hidden");
    emailInput.classList.add("border-red-500");
  }
});
