// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function createPassword() {
var passwordLength = prompt("What length password would you like, between 8 and 128 characters?");
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
   alert("Please pick a number between 8 and 128");
   passwordLength = prompt("What length password would you like, between 8 and 128 characters?");
    };
var lowercase = prompt("Pick a lower case letter.");
    while(lowercase !== lowercase.toLowerCase() || isNaN(lowercase) === false || lowercase.length > 1) {
      alert("Please pick a lowercase letter")
      lowercase = prompt("Pick a lower case letter.");
    }
var uppercase = prompt("Pick an uppercase letter");
    while(uppercase !== uppercase.toUpperCase() || isNaN(lowercase) === false || uppercase.length > 1){
       alert("Please pick an uppercase letter");
       uppercase = prompt("Pick an uppercase letter");
    };
var numeric = prompt("Pick a one digit number.");
    while(numeric < 0 || numeric > 9 || isNaN(numeric)) {
      alert("Please pick a number between 0 and 9");
      numeric = prompt("Pick a one digit number.");
    };

var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var specialCharacter = prompt("Pick a special characters i.e. !, @, #, $, %, &, *, etc")

    if(format.test(specialCharacter) && specialCharacter.length < 2){
         alert("Thank you for your inputs, your password will now be generated");
      } 
      else {
        alert("Please pick a special character");
        specialCharacter = prompt("Pick a special characters i.e. !, @, #, $, %, &, *, etc")
      }

    function generateRandomString(length) {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
       
      for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
       
      return text;
    }




document.getElementById("password").innerHTML = ("Your password is:" + lowercase + uppercase + numeric + specialCharacter + (generateRandomString(passwordLength-4)))

  }
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
