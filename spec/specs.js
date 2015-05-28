describe('countUpBy', function() {
  it("counts up to 5 by one", function() {
    expect(countUpBy(5, 1)).to.eql([1, 2, 3, 4, 5])
  });

  it("counts up to 10 by two", function() {
    expect(countUpBy(10, 2)).to.eql([2, 4, 6, 8, 10])
  });

  it("counts up to 50 by seven", function() {
    expect(countUpBy(50, 7)).to.eql([7, 14, 21, 28, 35, 42, 49])
  });
});
