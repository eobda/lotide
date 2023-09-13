# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eobda/lotide`

**Require it:**

`const _ = require('@eobda/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Returns the head of a given array.
* `tail`: Returns the tail of a given array.
* `middle`: Returns the middle value(s) of a given array.
* `countLetters`: Returns the number of times each letter of a given string appears in that string.
* `countOnly`: Returns the number of times certain elements appear in a given array.
* `findKey`: Returns the first key of an object that matches a given search function.
* `findKeyByValue`: Returns the key of an object for a given value.
* `flatten`: Flattens an array with nested arrays into a single array.
* `letterPositions`: Returns all of the indices where a given letter is found in a string.
* `map`: Returns the result of calling a function on all elements of a given array.
* `takeUntil`: Returns a slice of an array up to a given end point.
* `without`: Returns a given array with items from another given array removed from it.