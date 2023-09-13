const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements

// Test Case 3: An array with only one element yields an empty tail
const singleArray = ['head'];
console.log(tail(singleArray));

// Test Case 4: An empty array should yield an empty array for its tail
const emptyArray = [];
console.log(tail(emptyArray));