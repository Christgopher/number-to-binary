var wordOrder= function(sentence) {
  var words = {};
  var sentenceArray = sentence.split(" ")

  sentenceArray.forEach(function(word) {
    if (Object.keys(words).indexOf(word) === -1) {
      words[word] = 1;
    } else {
      words[word] += 1;
    }
  });

  var sortable = []
  for (var word in words)
  sortable.unshift([word, words[word]])
  sortable.sort(function(a, b) {return a[1] - b[1]})

  var finalArray = []

  sortable.forEach(function(property) {
    finalArray.push((property[0].toString()) + " " + (property[1]).toString())

  });

  return finalArray.reverse();
}

$(function() {

  $("form#sentence").submit(function(event) {
    var sentence = $("input#sentence").val();
    var result = wordOrder(sentence).reverse();
    result.forEach(function(property) {
      $(".counts").prepend("<li>" + property + "</li>")
    });


    event.preventDefault();
  });
});
