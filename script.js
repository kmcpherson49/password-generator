// Assignment code here
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "_", "-", "@", ";", ":"];

var userPasswordChoice = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {

    var passLength = prompt("How long would you like your password? Please choose a number between 8 and 128.");
        console.log(passLength);
        if (passLength === "" || passLength === null || isNaN(passLength)) {
            window.alert("You didn't enter a valid choice, try again!");
            // use return to call it again and stop the rest of this function from running
            return generatePassword();
            }
        if (passLength < 8 || passLength > 128) {
            window.alert("You didn't enter a valid choice, try again!");
            // use return to call it again and stop the rest of this function from running
            return generatePassword();
            }

    // include lowercase//
    var lowerCase = window.confirm("Do you want your password to contain lowercase letters?");
    if (lowerCase) {
        userPasswordChoice = userPasswordChoice.concat(lowerChar);
    }
    console.log(userPasswordChoice)

    // include uppercase//
    var upperCase = window.confirm("Do you want your password to contain uppercase letters?");
    if (upperCase) {
        userPasswordChoice = userPasswordChoice.concat(upperChar);
    }
    console.log(userPasswordChoice)

    // include numeric values//
    var numeric = window.confirm("Do you want your password to contain numeric values?");
    if (numeric) {
        userPasswordChoice = userPasswordChoice.concat(numericChar);
    }
    console.log(userPasswordChoice)

    // include lowercase//
    var special = window.confirm("Do you want your password to contain special characters?");
    if (special) {
        userPasswordChoice = userPasswordChoice.concat(specialChar);
    }
    
    generator (userPasswordChoice, passLength);
}

var newPassword = ""
var generator = (userPasswordChoice, passLength) => {
    console.log(userPasswordChoice)

for (var i = 0; i < passLength; i++) {
    var char = Math.floor(Math.random() * userPasswordChoice.length)
    newPassword += userPasswordChoice[char];

    console.log(newPassword)
 }
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.textContent = newPassword;
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
