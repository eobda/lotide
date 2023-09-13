const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {

  const restaurants = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  
  const cheeses = {
    "Stilton": { country: "England" },
    "Gruyere": { country: "Switzerland" },
    "Brie": { country: "France" },
    "Manchego": { country: "Spain" }
  };

  console.log('restaurants:', restaurants);
  console.log('cheeses:', restaurants);

  it("returns 'noma' from restaurants for x => x.stars === 2", () => {
    assert.strictEqual(findKey(restaurants, x => x.stars === 2), 'noma');
  });

  it("returns 'Gruyere' from cheeses for x => x.country[0] === 'S'", () => {
    assert.strictEqual(findKey(cheeses, x => x.country[0] === "S"), 'Gruyere');
  });

});