describe('decimator', function() {
  it("turns binary into decimal", function() {
    expect(decimator("11", 2)).to.eq(3);
  });

  it("turns binary into decimal", function() {
    expect(decimator("100", 2)).to.eq(4);
  });

  it("turns binary into decimal", function() {
    expect(decimator("100100", 2)).to.eq(36);
  });

  it("turns any kind of number into decimal", function() {
    expect(decimator("22", 3)).to.eq(8);
  });

  it("turns any kind of number into decimal", function() {
    expect(decimator("1235", 8)).to.eq(669);
  });
});
