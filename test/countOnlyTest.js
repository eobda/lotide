const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const itemsToCount = {
    "Jason": true,
    "Karima": true,
    "Fang": true,
    "Agouhanna": false };
  console.log("firstNames:", firstNames);
  console.log("itemsToCount:", itemsToCount)

  const result = countOnly(firstNames, itemsToCount);
  
  it("returns 1 for ['Jason']", () => {
    assert.strictEqual(result["Jason"], 1);
  });

  it("returns undefined for ['Karima']", () => {
    assert.strictEqual(result["Karima"], undefined);
  });

  it("returns 2 for ['Fang']", () => {
    assert.strictEqual(result["Fang"], 2);
  });

  it("returns undefined for ['Agouhanna']", () => {
    assert.strictEqual(result["Agouhanna"], undefined);
  });

});