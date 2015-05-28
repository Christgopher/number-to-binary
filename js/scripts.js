var countUpBy = function(upTo, upBy) {
  var numbers = [];
  for (var i = upBy; i <= upTo; i = i + upBy) {
    numbers.push(i);
  }
  return numbers;
};

$(document).ready(function() {

  $("form#numbers").submit(function(event) {
    var upTo = parseInt($("input#upTo").val());
    var upBy = parseInt($("input#upBy").val());
    var result = countUpBy(upTo, upBy).join(" ");
    $(".numbers").text(result);

    event.preventDefault();
  });
});
