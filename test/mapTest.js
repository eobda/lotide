const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {

  it("returns ['e', 'g', 'b', 'd', 'f'] for ['every', 'good', 'boy', 'deserves', 'fudge'] and word => word[0]", () => {
    assert.deepEqual(map(["every", "good", "boy", "deserves", "fudge"], word => word[0]), ['e', 'g', 'b', 'd', 'f']);
  });

  it("returns [2, 4, 6, 8] for [1, 2, 3, 4] and num => num * 2", () => {
    assert.deepEqual(map([1, 2, 3, 4], num => num * 2), [2, 4, 6, 8]);
  });

  it("returns ['England', 'Switzerland', 'France'] for a list of cheeses and cheese => cheese.country", () => {
    const cheeses = [
      { name: "Stilton",
        country: "England"},
      { name: "Gruyere",
        country: "Switzerland"},
      { name: "Brie",
        country: "France"}
    ];
    assert.deepEqual(map(cheeses, cheese => cheese.country), ["England", "Switzerland", "France"]);
  });

});