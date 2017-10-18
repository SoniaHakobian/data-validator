const Validator = require('./Validator.js');

class ArmPhoneValidator extends Validator {
  isArmPhone(phonenum) {
    let reg =  /^(010\d{6}|091\d{6}|099\d{6}|041\d{6}|043\d{6}|012\d{6}|077\d{6}|095\d{6}|077\d{6}|093\d{6}|094\d{6}|098\d{6}|055\d{6}|[+]374\d{8}|[+]37410\d{6})$/g;
    return reg.test(phonenum);
  }
}

module.exports = Validator;
var a = new ArmPhoneValidator();

console.log(a.isArmPhone('+37495769880'));
