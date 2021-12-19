// Assignment code here
//PSUEDO CODE
//DEFINE characters to be used to generate password
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//generatePassword function
function generatePassword(params) {
  var characterLength = prompt(
    "choose a length between 8 and 128 characters: "
  );
  //parse teh input into a number

  console.log("characterLength: ", characterLength);
  //check if promt is left empty
  while (characterLength === "") {
    characterLength = prompt("must choose a length for password: ");
  }
  //check if length is within given prarameters
  while (characterLength < 8 || characterLength > 128) {
    //if less than 8 OR greater than 128, go through the generate password again
    characterLength = prompt(
      "invalid input, enter a valid length between 8 and 128"
    );
  }

  // WHEN asked for character types to include in the password
  //THEN I confirm whether or not to include lowercase, uppercase, numeric,
  //using CONFIRM window method to get criteria for chracter types
  //set as boolean variabls, either true or false

  var confirmLowerCase = confirm("include lower case letters? ");
  var confirmUpperCase = confirm("include upper case letters? ");
  var confirmNumber = confirm("include numbers? ");
  var confirmSpecial = confirm("include special characters? ");

  //   WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected

  // while (
  //   !confirmLowerCase &&
  //   !confirmUpperCase &&
  //   !confirmNumber &&
  //   !confirmSpecial
  // ) {
  //   alert("Must select at least one criteria to proceed: ");
  //   var confirmLowerCase = confirm("include lower case letters? ");
  //   var confirmUpperCase = confirm("include upper case letters? ");
  //   var confirmNumber = confirm("include numbers? ");
  //   var confirmSpecial = confirm("include special characters? ");
  // }

  // console.log(
  //   confirmLowerCase,
  //   confirmUpperCase,
  //   confirmNumber,
  //   confirmSpecial
  // );

  //combination of responses
  //if all 4 are true
  var result = "";
  if (confirmLowerCase && confirmUpperCase && confirmNumber && confirmSpecial) {
    //combine all strings into one
    // password.concat(uppercase, lowercase);
    // console.log("password :", password);
    result = password.concat(uppercase, lowercase, numbers, symbols);
    console.log(result);
  }
  //if 3 are true ----------------------------------------------
  if (
    !confirmLowerCase &&
    confirmUpperCase &&
    confirmNumber &&
    confirmSpecial
  ) {
    result = password.concat(uppercase, numbers, symbols);
    console.log(result);
  }

  //---
  if (
    confirmLowerCase &&
    !confirmUpperCase &&
    confirmNumber &&
    confirmSpecial
  ) {
    result = password.concat(lowercase, numbers, symbols);
    console.log(result);
  }

  //---
  if (
    confirmLowerCase &&
    confirmUpperCase &&
    !confirmNumber &&
    confirmSpecial
  ) {
    result = password.concat(uppercase, lowercase, symbols);
    console.log(result);
  }
  //---
  if (
    confirmLowerCase &&
    confirmUpperCase &&
    confirmNumber &&
    !confirmSpecial
  ) {
    result = password.concat(uppercase, lowercase, numbers);
    console.log(result);
  }

  //if 2 are true ------------------------------------------
  if (confirmSpecial && confirmNumber) {
    result = password.concat(numbers, symbols);
    console.log(result);
  }

  //
  if (confirmSpecial && confirmLowerCase) {
    result = password.concat(symbols, lowercase);
    console.log(result);
  }

  //
  if (confirmSpecial && confirmSpecial) {
    result = password.concat(symbols, uppercase);
    console.log(result);
  }

  //
  if (confirmLowerCase && confirmNumber) {
    result = password.concat(lowercase, numbers);
    console.log(result);
  }

  //
  if (confirmLowerCase && confirmUpperCase) {
    result = password.concat(lowercase, uppercase);
    console.log(result);
  }

  //
  if (confirmNumber && confirmUpperCase) {
    result = password.concat(numbers, uppercase);
    console.log(result);
  }

  //
  if (confirmSpecial && confirmNumber) {
    result = password.concat(numbers, symbols);
    console.log(result);
  }

  //if 1 option is true---------------------------------------------------------
  if (confirmSpecial) {
    result = password.concat(symbols);
  }

  if (confirmNumber) {
    result = password.concat(numbers);
  }

  if (confirmLowerCase) {
    result = password.concat(lowercase);
  }

  //generate random seelction for password
  // var resultingRandom = "";
  // for (let i = 0; i < result.length; i++) {
  //   var randomLetter = result[Math.floor(Math.random() * result.length)];
  //   resultingRandom.concat(randomLetter);
  //   console.log(resultingRandom);
  // }

  //return only entered length
  // var rand = "";
  // for (let i = 0; i < characterLength; i++) {
  //   // console.log(result[i]);
  //   console.log(result[Math.floor(Math.random() * result.length)]);
  // }

  var emptyString = "";
  while (emptyString.length < characterLength) {
    emptyString += result[Math.floor(Math.random() * result.length)];
  }

  console.log(emptyString);
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
