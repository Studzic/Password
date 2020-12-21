  
// Assignment code here
// I will need to creater arrarys for numbers upper and lower case letters unique characters
// I will need to create window prompts for the customer to decide their criteria from 8 -128 characters 
// remeber too set it as one greater than 8 and 128 so that my array works
// have a statement that will prevent them from selecting no to everything
// Add event listener to generate button

document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays need to find a way to list all of these so i do not have to re-type
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// these variables will be used as the windowprompts
var Length = "";
var Special;
var Numbers;
var Upper;
var Lower;

// use the confirm length to set the length of the password
function generatePassword() 
{
  var Length = (window.prompt("Your Password must contain at least 8 to 128 characters."));

  // must have at least 8 - 128 create a window alert with the legnth variable
  while(Length <= 7 || Length >= 129 ) {
      window.alert("Password length must be between 8-128 characters, Try again!");
      var Length = (window.prompt("Password must contain 8 - 128 characters!"));
      } 
      window.alert(" Your password will have " + Length + " characters" );

    // create window.confirms for all of the different variables 
    var Special = window.confirm("Press OK if you want to include special characters in the password.");
    var Numbers = window.confirm("Press OK if you want to include numbers in the password.");    
    var Lower = window.confirm("Press OK if you want to include lowercase letters in the password.");
    var Upper = window.confirm("Press OK if you want to include uppercase letters in the password.");
      
    // reset everything if no paramaters are chosen otherwise they can create a weak password

      if(Upper === false && Lower === false && Special === false && Numbers === false) {
        
        window.alert("Please choose at least one of the options!");
        var Special = window.confirm("Press OK if you want to include special characters in the password.");
        var Numbers = window.confirm("Press OK if you want to include numbers in the password.");    
        var Lower = window.confirm("Press OK if you want to include lowercase letters in the password.");
        var Upper = window.confirm("Press OK if you want to include uppercase letters in the password.");   
    } 
        //combine our two arrays so that if they select the option it will be included
      var newPassword = []
      
    if (Special) {
      newPassword = newPassword.concat(specialChar)
    }

    if (Numbers) {
      newPassword = newPassword.concat(number)
    }
      
    if (Lower) {
      newPassword = newPassword.concat(lowerLetter)
    }

    if (Upper) {
      newPassword = newPassword.concat(upperLetter)
    }

      console.log(newPassword)

      var randomPassword = ""
      
      for (var i = 0; i < Length; i++) {
        randomPassword = randomPassword + newPassword[Math.floor(Math.random() * newPassword.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

//we put functions at the bottom of the page here we will have our write password generator
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}