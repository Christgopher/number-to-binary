var decimator = function(number, base) {
  var numberArray = number.split("").reverse();
  var digitCounter = 1;
  var total = 0;
  numberArray.forEach(function(digit) {
    total += digit*digitCounter
    digitCounter *= base
  });
  return total;
}
