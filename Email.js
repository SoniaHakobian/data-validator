const Validator = require('./Validator');
class EmailValidator extends Validator
{
  EmailValidator(inputText)
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.match(mailformat))
            {
              return true;
            }
         else
            {
            console.log("You have entered an invalid email address!");
            return false;
            }
    }
};
var a = new EmailValidator();
console.log(a.EmailValidator("sonya-hakobyan@mal.ru"));
