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

  //combination of responses
  //if all 4 are true
  var result = "";
  // while(!confirmLowerCase && !confirmUpperCase && !confirmNumber && !confirmSpecial){

  // }
  if (confirmLowerCase && confirmUpperCase && confirmNumber && confirmSpecial) {
    result = password.concat(uppercase, lowercase, numbers, symbols);
    console.log("all 4 positive options", result);
  }
  //if 3 are true ----------------------------------------------
  else if (confirmSpecial && confirmNumber && confirmUpperCase) {
    result = password.concat(numbers, uppercase, symbols);
  } else if (confirmSpecial && confirmNumber && confirmLowerCase) {
    result = password.concat(numbers, lowercase, symbols);
  }
  //
  else if (confirmSpecial && confirmUpperCase && confirmLowerCase) {
    result = password.concat(symbols, uppercase, lowercase);
    // console.log(result);
  } else if (confirmNumber && confirmLowerCase && confirmUpperCase) {
    result = password.concat(numbers, lowercase, uppercase);
  }
  //2 positive choices
  else if (confirmSpecial && confirmNumber) {
    result = password.concat(symbols, numbers);
  } else if (confirmSpecial && confirmLowerCase) {
    result = password.concat(symbols, lowercase);
  } else if (confirmSpecial && confirmUpperCase) {
    result = password.concat(symbols, uppercase);
  } else if (confirmLowerCase && confirmNumber) {
    result = password.concat(lowercase, numbers);
  } else if (confirmLowerCase && confirmUpperCase) {
    result = password.concat(lowercase, uppercase);
  } else if (confirmNumber && confirmUpperCase) {
    result = password.concat(numbers, uppercase);
  }
  //for single positive option
  else if (confirmSpecial) {
    result = password.concat(symbols);
  } else if (confirmNumber) {
    result = password.concat(numbers);
  } else if (confirmLowerCase) {
    result = password.concat(lowercase);
  } else if (confirmUpperCase) {
    result = password.concat(uppercase);
  }

  //get random letter from resulting string
  console.log("current result string: ", result);
  var emptyString = "";
  while (emptyString.length < characterLength) {
    emptyString += result[Math.floor(Math.random() * result.length)];
  }

  console.log("empty string: ", emptyString);
  return emptyString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
