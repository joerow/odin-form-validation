console.log("script linked");

const countries = [
  {
    countryName: "Great Britain",
    postcodeFormat: /[a-z]\d\d\s\d[a-z][a-z]/,
  },
  {
    countryName: "United States",
    postcodeFormat: /\d\d\d\d\d/,
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
