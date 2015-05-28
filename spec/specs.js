describe('wordStorer', function() {
  it("makes a new hash entry for every word", function() {
    expect(wordOrder("i am groot")).to.eql(["i am groot"])
  });

  it("counts the number of times a word appears", function() {
    expect(wordOrder("i am groot groot groot")).to.eql(["i am groot"])
  });

  it("sorts things", function() {
    expect(wordOrder("i am groot groot groot")).to.eql("groot, 3. i, 1. am, 1.")
  });

  it("sorts things", function() {
    expect(wordOrder("i i i i i  a k groot groot groot groot")).to.equal(["i 5", "groot 4", "a 1", "i 1"])
  });
});
