// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
  passwordText.value = password;

}

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
  var desiredLength;
  var isLowerCase;
  var isUpperCase;
  var isNumeric;
  var isSpecial;

  desiredLength = prompt("How long should the password be?");

  if ((desiredLength < 8) || (desiredLength > 128)) {
    alert("Password must be at least 8 characters and no more than 128 characters");
    generatePassword();
    return;
  } else {
    specialCharactersValidation();
  }

  function specialCharactersValidation () {
    isLowerCase = confirm("Do you want to include lowercase characters?");
    isUpperCase = confirm("Do you want to include uppercase characters?");
    isNumeric = confirm("Do you want to include numeric characters");
    isSpecial = confirm("Do you want to include special characters");

    if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecial) {
      alert("At lease one character type should be selected");
      specialCharactersValidation();
      return;
    } else {
      return isLowerCase, isUpperCase, isNumeric, isSpecial;
    }
  }

  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()";

  var eligibleChars = "";

  if (isLowerCase) {
    eligibleChars = eligibleChars.concat(lowerCaseChars);
  } else {};

  if (isUpperCase) {
    eligibleChars = eligibleChars.concat(upperCaseChars);
  } else {};

  if (isNumeric) {
    eligibleChars = eligibleChars.concat(numericChars);
  } else {};

  if (isSpecial) {
    eligibleChars = eligibleChars.concat(specialChars);
  } else {};

  console.log(eligibleChars);

  for (var i = 0; i <= desiredLength; i++) {
    var randomNumber = Math.floor(Math.random() * eligibleChars.length);
    password = ;
  }








} 



// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

