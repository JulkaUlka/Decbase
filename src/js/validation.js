import { showGreetings } from "./confetti";

const button = document.querySelector(".subscribtion__btn");

button.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const nameInput = document.getElementById("name");
  const surnameInput = document.getElementById("surname");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("name-error");
  const surnameError = document.getElementById("surname-error");
  const emailError = document.getElementById("email-error");
  const nameRegex = /^[A-Z][a-z]*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let valid = true;

  if (!nameRegex.test(nameInput.value)) {
    nameError.textContent =
      "Please ensure the name consists of capitalized Latin letters only.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  if (!nameRegex.test(surnameInput.value)) {
    surnameError.textContent =
      "Please ensure the surname consists of capitalized Latin letters only.";
    valid = false;
  } else {
    surnameError.textContent = "";
  }

  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  if (valid) {
    const name = nameInput.value;
    const surname = surnameInput.value;
    const email = emailInput.value;
    saveInfo(name, surname, email);
    if (name === "Sigma") {
      showGreetings(name);
    }
    resetForm();
  }

  return false;
}

function saveInfo(name, surname, email) {
  const formData = {
    name: name,
    surname: surname,
    email: email,
  };

  localStorage.setItem("formData", JSON.stringify(formData));
}

function resetForm() {
  const form = document.querySelector(".form");
  form.reset();
}
