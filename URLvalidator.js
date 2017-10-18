const Validator = require('./Validator.js');
class URLValidator extends Validator
{
   isURlValid(userInput)
   {
      var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
      if(res === null)
          return false;
          return true;
   }
}
module.exports = Validator;
var a = new URLValidator();
console.log(a.isURlValid('https://www.facebook.com'));
