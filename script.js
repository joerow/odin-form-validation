const countries = [
  {
    countryName: "Great Britain",
    postcodeFormat: /[a-z]\d\d\s\d[a-z][a-z]/,
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
        postalError.textContent = "please enter a valid post code. E.g. 55555";
        postalError.className = "error active";
        // Set the styling appropriately
      }
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
