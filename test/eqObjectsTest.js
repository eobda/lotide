const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

// TEST CODE

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const differentColorShirtObject = { size: "medium", colors: ["red", "white"] };

console.log('shirtObject:', shirtObject);
console.log('anotherShirtObject:', anotherShirtObject);
console.log('longSleeveShirtObject:', longSleeveShirtObject);
console.log('multiColorShirtObject:', multiColorShirtObject);
console.log('anotherMultiColorShirtObject:', anotherMultiColorShirtObject);
console.log('differentColorShirtObject:', differentColorShirtObject);

describe("#eqObjects", () => {

  it("returns true for comparing shirtObject and anotherShirtObject", () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it("returns false for comparing shirtObject and longSleeveShirtObject", () => {
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });

});

describe("Arrays as Values tests", () => {

  it("returns true for comparing multiColorShirtObject and anotherMultiColorShirtObject", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });

  it("returns false for comparing multiColorShirtObject and differentColorShirtObject", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, differentColorShirtObject), false);
  });

});