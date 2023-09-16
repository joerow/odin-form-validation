const countries = [
  {
    countryName: "Great Britain",
    postcodeFormat: /[a-z]\d\d\s\d[a-z][a-z]/,
    postcodeFormatPlain: "S43 3NF",
  },
  {
    countryName: "United States",
    postcodeFormat: /\d\d\d\d\d/,
    postcodeFormatPlain: "57044",
  },
];

let selectOptions = document.getElementById("userCountry");
countries.forEach((country) => {
  let option = document.createElement("option");
  option.value = country.countryName;
  option.innerText = country.countryName;
  selectOptions.appendChild(option);
});

const emailInput = document.getElementById("userEmail");
const emailError = document.querySelector("#userEmail + span.error");

emailInput.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.
  if (emailInput.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError("email");
  }
});

function validateInput(type, toValidate) {
  if (type === "postal") {
    if (toValidate.value.match(postalFormat)) {
      return true;
    }
    return false;
  } else {
    console.log("invalid type to validate");
  }
}

function showError(error) {
  if (error == "email") {
    if (emailInput.validity.typeMismatch) {
      // If the field is empty,
      // display the following error message.
      emailError.textContent = "please enter a valid email";
      emailError.className = "error active";
    }
  }
  if (error == "postal") {
    if (postalInput.validity.valid) {
      // If the field is empty,
      // display the following error message.
      postalError.textContent = "please enter a valid postal code";
    } else {
      if (validateInput("postal", postalInput)) {
        // If the field is empty,
        // display the following error message.
        postalError.textContent = "please enter a valid post code";
      }
      // Set the styling appropriately
      postalError.className = "error active";
    }
    postalError.textContent = "please enter a valid post";
  }
}

const postalInput = document.getElementById("userPostal");
const postalError = document.querySelector("#userPostal + span.error");

postalInput.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.
  if (postalInput.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    postalError.textContent = ""; // Reset the content of the message
    postalError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError("postal");
  }
});
