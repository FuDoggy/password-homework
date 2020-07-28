//Declaring arrays for uppercase letters, lowercase letters, special characters, and numbers.  
//Also declaring empty arrays for newArray (for manipulation) and finalArray to pass in as the final password to the user.
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharsArray = ['!', '"', '#', '$', '%', '&', '(', ')', '*', ',', '+', ',', '-', '.', '/', '\\',':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', "`", '{', '|', '}', '~'];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var newArray = [];
var finalArray = [];

//Call function generatePassword()
function generatePassword(){

//Declare and assign user character length variables for evaluation and error handling purposes
  var lengthOK = false;
  var userPasswordChoiceLength;

  //while loop to execute error handling and make sure the user inputs a number, and a number that is between 8 and 128 characters
  while(!lengthOK) {
    userPasswordChoiceLength = +prompt("How many characters would you like your password to be?");
    if (isNaN(userPasswordChoiceLength)) {
      alert ("Password length must be provided as a number!");
    }
    else if(userPasswordChoiceLength < 8 || userPasswordChoiceLength > 128){
      alert ("The character amount must be between 8 and 128 characters!")
    }
    else {
      lengthOK = true;
    }
  }
    
  //Confirm with the user that they want uppercase letters in their password, and if so, add it to the array of possible characters
  var userPasswordUpperChoice = confirm ("Would you like uppercase letters in your password?");
    if (userPasswordUpperChoice) {
      newArray = newArray.concat(upperCaseArray);
      }
      console.log(newArray);

  //Confirm with the user that they want lowercase letters in their password, and if so, add it to the array of possible characters
  var userPasswordLowerChoice = confirm ("Would you like lowercase letters in your password?");
    if (userPasswordLowerChoice) {
      newArray = newArray.concat(lowerCaseArray);
      }
      console.log(newArray);

  //Confirm with the user that they want special characters in their password, and if so, add it to the array of possible characters    
    var userPasswordSpecCharsChoice = confirm ("Would you like special characters in your password?");
      if (userPasswordSpecCharsChoice) {
        newArray = newArray.concat(specialCharsArray);
      }
        console.log(newArray);

  //Confirm with the user that they want numbers in their password, and if so, add it to the array of possible characters 
    var userPasswordNumbersChoice = confirm ("Would you like numbers in your password?");
      if (userPasswordNumbersChoice) {
        newArray = newArray.concat(numbersArray);
      }
      console.log(newArray);

  //Cut down password length to user specs, randomize, and return final password 
      var finalArray = ""
      for (var i = 0; i <userPasswordChoiceLength; i++) {
        finalArray = finalArray + newArray [Math.floor(Math.random() * newArray.length)]
      }
      console.log(finalArray);
      return finalArray;
    }
  
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
