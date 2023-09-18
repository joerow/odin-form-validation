const countries = [
  {
    countryName: "Great Britain",
    postcodeFormat:
      "[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}",
    postcodeFormatPlain: "S43 3NF",
  },
  {
    countryName: "United States",
    postcodeFormat: "[0-9][0-9][0-9][0-9][0-9]",
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

function updatePostal(e) {
  let country = countries.find((x) => x.countryName === selectOptions.value);
  postalInput.pattern = country.postcodeFormat;
  postalInput.dataset.example = country.postcodeFormatPlain;
  console.log(country.postcodeFormat);
}

const selectDropdown = document.querySelector("select");
selectDropdown.addEventListener("change", updatePostal);

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
    let country = countries.find((x) => x.countryName === selectOptions.value);
    console.log(country.postcodeFormat);
    const postalFormat = new RegExp(country.postcodeFormat);
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
      // If the field not a valid email type,
      // display the following error message.
      emailError.textContent = "please enter a valid email";
      emailError.className = "error active";
    }
    if (emailInput.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      emailError.textContent = "please enter an email";
      emailError.className = "error active";
    }
  }
  if (error == "postal") {
    if (postalInput.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      postalError.textContent = "please input a valid postal code";
      postalError.className = "error active";
    } else {
      if (postalInput.validity.patternMismatch) {
        // If the field is empty,
        // display the following error message.
        postalError.textContent =
          "please enter a valid post code. E.g. " + postalInput.dataset.example;
        postalError.className = "error active";
        // Set the styling appropriately
      }
    }
  }
  if (error == "password") {
    if (passwordInput.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      passwordError.textContent = "Please input a valid password";
      passwordError.className = "error active";
    } else {
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      var lowerCaseError = "";
      if (passwordInput.value.match(lowerCaseLetters)) {
      } else {
        lowerCaseError = "Missing lowercase" + "<br>";
      }

      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      var upperCaseError = "";
      if (passwordInput.value.match(upperCaseLetters)) {
      } else {
        upperCaseError = "Missing uppercase" + "<br>";
      }

      // Validate numbers
      var numbers = /[0-9]/g;
      var numbersError = "";
      if (passwordInput.value.match(numbers)) {
      } else {
        numbersError = "Missing number" + "<br>";
      }

      // Validate length
      var lengthError = "";
      if (passwordInput.value.length >= 8) {
      } else {
        lengthError =
          "Password too short." +
          "<br>" +
          (8 - passwordInput.value.length) +
          " more characters needed." +
          "<br>";
      } // If the field is empty,
      // display the following error message.
      passwordError.innerHTML =
        lengthError + lowerCaseError + upperCaseError + numbersError;
      passwordError.className = "error active";
      // Set the styling appropriately
    }
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

const passwordInput = document.getElementById("userPassword");
const passwordError = document.querySelector("#userPassword + span.error");
passwordInput.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.
  if (passwordInput.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    passwordError.textContent = ""; // Reset the content of the message
    passwordError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError("password");
  }
});

const passwordConfirm = document.getElementById("passwordConfirmation");
const passwordConfirmError = document.querySelector(
  "#passwordConfirmation + span.error"
);
passwordConfirm.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.
  if (passwordConfirm.value === passwordInput.value) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    passwordConfirmError.textContent = ""; // Reset the content of the message
    passwordConfirmError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    passwordConfirmError.textContent = "Passwords do not match";
  }
});
