
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharsArray = ['!', '"', '#', '$', '%', '&', '(', ')', '*', ',', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', "`", '{', '|', '}', '~'];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var newArray = [];
var finalArray = [];

var userPasswordChoiceLength = prompt ("How many characters would you like your password to be?");

  userPasswordChoiceLength = parseInt (userPasswordChoiceLength);
  console.log (userPasswordChoiceLength)
  
    if (userPasswordChoiceLength < 8 || userPasswordChoiceLength > 128) {
      alert ("The character amount must be between 8 and 128 characters!");
    } 
    if (isNaN(userPasswordChoiceLength)) {
      alert ("Password length must be provided as a number!")
    }
  
  var userPasswordUpperChoice = confirm ("Would you like uppercase letters in your password?");
    if (userPasswordUpperChoice) {
      newArray = newArray.concat(upperCaseArray);
      }
      console.log(newArray);

  var userPasswordLowerChoice = confirm ("Would you like lowercase letters in your password?");
    if (userPasswordLowerChoice) {
      newArray = newArray.concat(lowerCaseArray);
      }
      console.log(newArray);

    var userPasswordSpecCharsChoice = confirm ("Would you like special characters in your password?");
    if (userPasswordSpecCharsChoice) {
      newArray = newArray.concat(specialCharsArray);
      }
      console.log(newArray)

    var userPasswordNumbersChoice = confirm ("Would you like numbers in your password?");
    if (userPasswordNumbersChoice) {
      newArray = newArray.concat(numbersArray);
      }
      console.log(newArray)

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
