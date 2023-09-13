// return all the indices (zero-based positions) in the string where each character is found
const letterPositions = function(sentence) {
  const results = {};

  // result should look like: { a: [0, 1, 2], b: [3, 4, 5] }
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [ i ];
      }
    }
  }

  return results;
};

module.exports = letterPositions;