const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
 
  const testResult = countLetters("lighthouse in the house")
  console.log("Test string: 'lighthouse in the house'")

  it("should return 1 for 'l'", () => {
    assert.strictEqual(testResult["l"], 1);
  });

  it("should return 4 for 'h'", () => {
    assert.strictEqual(testResult["h"], 4);
  });

  it("should return 3 for 'e'", () => {
    assert.strictEqual(testResult["e"], 3);
  });

  it("should return 1 for 'n'", () => {
    assert.strictEqual(testResult["n"], 1);
  });

});