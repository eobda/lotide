const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {

  it("returns [0] for ('abcd')['a']", () => {
    assert.deepEqual(letterPositions("abcd")["a"], [0]); 
  });

  it("returns [2, 4] for ('abcdc')['c']", () => {
    assert.deepEqual(letterPositions("abcdc")["c"], [2, 4]);
  });

});