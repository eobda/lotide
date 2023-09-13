const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {

  const words = ["hello", "world", "lighthouse"];
  console.log('words:', words);

  it("returns ['hello', 'world'] for without(words, ['lighthouse'])", () => {
    assert.deepEqual(without(words, ['lighthouse']), ['hello', 'world']);
  });

  it('does not alter the original array of words when (without(words, ["lighthouse"]) is performed', () => {
    without(words, ['lighthouse']);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

});