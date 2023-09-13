const assert = require('chai').assert;
const tail = require('../tail');

// TEST CODE
describe('#tail', () => {

  it('returns ["Lighthouse, Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('does not alter the original array', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  });

  it('returns an empty tail for an array with one element', () => {
    assert.deepEqual(tail(['head']), []);
  });

  it('returns an empty array for an empty array', () => {
    assert.deepEqual(tail([]), []);
  });

});