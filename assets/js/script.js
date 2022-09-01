// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This function generates the password
function generatePassword () {
  // Setting password.value to an empty string to remove any stored passwords
  password.value = "";

  // These variables are local to gerneatePassword()
  var desiredLength;
  var isLowerCase;
  var isUpperCase;
  var isNumeric;
  var isSpecial;

  // A separate nested function for password length so user starts from here upon password length validation fail
  function passwordLengthValidation () {
    desiredLength = prompt("How many characters should the password be?");
    // If statement to verify the number is valid. If invalid, restart the generatepassword() function
    if ((desiredLength < 8) || (desiredLength > 128)) {
      alert("Password must be at least 8 characters and no more than 128 characters");
      passwordLengthValidation();
      return;
    } // If number is valid, start the next function
    else {
    specialCharactersValidation();
    }
  }

  passwordLengthValidation();

  // A separate nested function for special characters so if user says no to all prompts, they will restart at this function instead of at the beginning of the generatePassword() function
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
      // This allows the values to be usable by the parent function
      return isLowerCase, isUpperCase, isNumeric, isSpecial;
    }
  }

  // Setting the characters parameters as separate strings to be used as building blocks later
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()";

  // Created as an empty string so the previous strings can be concatenated into it
  var eligibleChars = "";

  // 4 if statements serving as building blocks. Each is evaluated independently
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

  // For loop to generate password based on the concatenated string
  for (var i = 0; i < desiredLength; i++) {
    var randomNumber = Math.floor(Math.random() * eligibleChars.length);
    // Substring sets the position of the concatenated string based on the result of the randomizer above. Takes that position in the string and stores it in password.value, building the password one character at a time. Continues until the desired password length is reached
    password.value += eligibleChars.substring(randomNumber, randomNumber +1);
  }

  // Brings the resulting password.value to the global level.
  return password.value
}
