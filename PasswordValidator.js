const Validator = require('./Validator');

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

var a = new PasswordValidator();

console.log(a.isPassword('passwordError'));
