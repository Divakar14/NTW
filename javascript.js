  function convert(num){
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
                'ninety'];
  
    var numString = num.toString();
  
    if (num < 0) return 'Negative numbers are not supported.';
  
    if (num === 0) return 'zero';
  
    //the case of 1 - 20
    if (num < 20) {
      return ones[num];
    }
  
    if (numString.length === 2) {
      return tens[numString[0]] + ' ' + ones[numString[1]];
    }
  
    //100 and more
    if (numString.length == 3) {
      if (numString[1] === '0' && numString[2] === '0')
        return ones[numString[0]] + ' hundred';
      else
        return ones[numString[0]] + ' hundred  ' + convert(+(numString[1] + numString[2]));
    }
    if(numString.length === 4 && numString.charAt(3) === '0' && numString.charAt(2) === '0') {
        var t = parseInt(numString[0] + numString[1]);
        if(t >= 20){  return tens[numString[0]] + ' ' + ones[numString[1]] + " hundred";
    }
        else { 
            return ones[t] + ' ' + ' hundred';
        }
      }
    if (numString.length === 4) {
      var end = +(numString[1] + numString[2] + numString[3]);
      if (end === 0) return ones[numString[0]] + ' thousand';
      if (end < 100) return ones[numString[0]] + ' thousand ' + convert(end);
      return ones[numString[0]] + ' thousand ' + convert(end);
    }
  }

  function convertToWords(num){
    var out = convert(parseInt(num));
    document.getElementById('container').innerHTML = out;
  }