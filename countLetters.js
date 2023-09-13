const countLetters = function(sentence) {
  const result = {};
  const text = sentence.split(" ").join("").toLowerCase();

  for (const letter of text) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
};

module.exports = countLetters;