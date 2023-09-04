console.log("script linked");

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
console.log(selectOptions);
countries.forEach((country) => {
  console.log(country.countryName);
  let option = document.createElement("option");
  option.value = country.countryName;
  option.innerText = country.countryName;
  selectOptions.appendChild(option);
  console.log("this ran");
});

const emailInput = document.getElementById("userEmail");
console.log(emailInput);
const emailError = document.querySelector("#userEmail + span.error");
console.log(emailError);
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

function showError(error) {
  if (error == "email") {
    if (emailInput.validity.patternMismatch) {
      // If the field is empty,
      // display the following error message.
      emailError.textContent = "please enter a valid email";
    }
    // Set the styling appropriately
    emailError.className = "error active";
  }
}
