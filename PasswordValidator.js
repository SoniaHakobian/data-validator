const Validator = require('./Validator.js');

class PasswordValidator extends Validator
{
  isPassword(pass)
   {
      let reg = /^(\w+){6,20}$/g;

      if(pass.match('password'))
        {
          return false;
        }
          return reg.test(pass);
    }
}

module.exports = Validator;
var a = new PasswordValidator();

console.log(a.isPassword('passwordError'));
