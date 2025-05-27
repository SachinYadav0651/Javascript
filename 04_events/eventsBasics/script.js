const form = document.getElementById("regForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const result = document.getElementById("result")

// 🔁 SUBMIT EVENT
form.addEventListener("submit", function (e) {
  console.log("Submit event triggered");

  let isValid = true;
  nameError.textContent = "";
  emailError.textContent = "";

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
    isValid = false;
  } else {
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");
  }

  // Validate Email
  if (!emailInput.value.includes("@")) {
    emailError.textContent = "Enter a valid email";
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
    isValid = false;
  } else {
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
  }

  // Always prevent default submission to avoid page refresh
  e.preventDefault();


  if (!isValid) {
    console.log("Form submission prevented due to validation errors");
    e.preventDefault(); // 🔒 Prevent actual submission
  } else {
    console.log("Form is valid, ready to submit!"); 
    result.textContent = `You have entered name: ${nameInput.value} and email: ${emailInput.value}`
  }
  
});

// 🔁 INPUT + BLUR EVENTS
[nameInput, emailInput].forEach((input) => {
  
  // INPUT EVENT: Typing feedback
  input.addEventListener("input", () => {
    console.log(`Input event on ${input.id}`);
    input.classList.remove("invalid");
  });

  // BLUR EVENT: When leaving the field
  input.addEventListener("blur", () => {
    console.log(`Blur event on ${input.id}`);
    if (input.value.trim() === "") {
      input.classList.add("invalid");
    } else {
      input.classList.add("valid");
    }
  });
});
