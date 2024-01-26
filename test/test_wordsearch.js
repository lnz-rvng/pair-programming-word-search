const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return false if matrix is empty", function() {
    const result = wordSearch([[]], 'SEINFELD')

    assert.isFalse(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'C', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'A', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'T', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'CAT')

    assert.isTrue(result);
  });

  it("should return true if the word is present backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'D', 'L', 'R', 'O', 'W', 'L', 'D'],
      ['Y', 'F', 'C', 'C', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'A', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'T', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'WORLD')

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally left to right", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'C', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'A', 'E', 'V', 'R', 'G'],
      ['W', 'D', 'C', 'T', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'O', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'G', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'DOG')

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally right to left", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'C', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'A', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'T', 'Y', 'E', 'M', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'A', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'K', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'E', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'MAKE')

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally and backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'Y', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'C', 'B', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'A', 'E', 'B', 'R', 'G'],
      ['W', 'H', 'C', 'T', 'Y', 'E', 'A', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'T'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'TABBY')

    assert.isTrue(result);
  });

});
