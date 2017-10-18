module.exports = class Validator
{

//is it Symbol
 isSpecialSymbol(sym)
{
 var letterNumber = /^[0-9a-zA-Z]+$/;
 if((sym.match(letterNumber)))
  {
   return false;
  }
else
  {
   return true;
  }
  }

//is it Number
 isNumber(num)
{
  var reg_num=new RegExp("[0-9]", "g");
return Number(num)===num && reg_num.test(num);
}

// is it String
 isString(str)
{
  if(typeof(str)==="string")
  {
    return true;
  }
  else{
    return false;
  }
}

//is it Integer
 isInt(num)
{
 return num % 1 ===0 && Number(num)===num;

}

// is it Float
 isFloat(num)
{
  return Number(num)===num && num % 1 !== 0;
}

  //is it Date
 isDate(d)
 {
   if (Date.parse(d))
    return true;
    return false;
  }
}
