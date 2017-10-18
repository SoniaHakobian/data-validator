const Validator = require('./Validator');
class UsernameValidator extends Validator
{
isUsername(str)
    {
      var error = "";
      var illegalChars = /\W/; // allow letters, numbers, and underscores
      if (str === "" || str.length < 4 || str.length > 24)
        {
           console.log("Please enter a valid Username.");
           return false;
        }
          return true;
    }
}
var a = new UsernameValidator();
console.log(a.isUsername('Sonia_hakobian_97'));
