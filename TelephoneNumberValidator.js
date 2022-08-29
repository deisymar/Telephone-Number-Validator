function telephoneCheck(str) {  
    const regex =/^[+]{0,1}(1\-|1\s|1|)?(([(]{1}[1-9]{3}[)]{1}(\-|\s)?\d{3}(\-|\s)?\d{4}$)|([1-9]{3}(\-|\s)?\d{3}(\-|\s)?\d{4}$))/;  
    console.log(regex.test(str));
    return (regex.test(str));
  }
  
  telephoneCheck("+1 (555)-555-5555");
  telephoneCheck("1 555-555-5555");
  telephoneCheck("(555)555-5555");
  telephoneCheck("1 456 789 4444");
  telephoneCheck("1 555)555-5555");
  telephoneCheck("123**&!!asdf#");
  telephoneCheck("2 (757) 622-7382");
  telephoneCheck("-1 (757) 622-7382");
  telephoneCheck("(275)76227382");
  telephoneCheck("(555)5(55?)-5555");
  telephoneCheck("55 55-55-555-5");
  telephoneCheck("2 757 622-7382");