// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// length of password //
var long = function() {
  window.alert("What is the length of the password?")
}

// include lowercase//
var lowerCase = window.confirm("Do you want your password to contain lowercase letters?");
// if true use lowercase, else don't use lowercase
if (lowerCase) {
    
}
else {

}


// include uppercase//
var upperCase = window.confirm("Do you want your password to contain uppercase letters?");
if (upperCase) {
    
}
else {
    
}

// include numeric values//
var numeric = window.confirm("Do you want your password to contain numeric values?");
if (numeric) {
    
}
else {
    
}

// include lowercase//
var special = window.confirm("Do you want your password to contain special characters?");
if (special) {
    //add characters !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
}
else {
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
