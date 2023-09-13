const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {

  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns ['a', 'b', 3, 'd'] for [['a', 'b'], [3], 'd']", () => {
    assert.deepEqual(flatten([['a', 'b'], [3], 'd']), ['a', 'b', 3, 'd']);
  });

});