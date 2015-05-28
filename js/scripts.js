var decimator = function(number, base) {
  var numbers = /[0123456789]/;
  var hexidexi = {A:10, B:11, C:12, D:13, E:14, F:15}
  var numberArray = number.split("").reverse();
  var digitCounter = 1;
  var total = 0;
  numberArray.forEach(function(digit) {

    if (numbers.test(digit)) {
      number = digit
    } else {
      number = hexidexi[digit]
    }

    total += number*digitCounter
    digitCounter *= base
  });
  return total;
}





$(function() {
  $("form#numbers").submit(function(event) {
    var number = $("input#number").val();

    var base = parseInt($("input#base").val());

    var result = decimator(number, base);
    alert(result)
    $(".counts").text(result);

    event.preventDefault();
  })
});
