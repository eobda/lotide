const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  console.log("bestTVShowsByGenre:", bestTVShowsByGenre)

  it("returns 'drama' for 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for 'That '70s Show'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  const foodGroups = {
    protein: "beans",
    carb: "rice",
    vegetable: "broccoli",
    fat: "butter"
  };
  console.log("foodGroups:", foodGroups);

  it("returns 'protein' for 'beans'", () => {
    assert.strictEqual(findKeyByValue(foodGroups, "beans"), "protein");
  });

  it("returns 'vegetable' for 'broccoli'", () => {
    assert.strictEqual(findKeyByValue(foodGroups, "broccoli"), "vegetable");
  });

  it("returns undefined for 'tide pod'", () => {
    assert.strictEqual(findKeyByValue(foodGroups, "tide pod"), undefined);
  });

});