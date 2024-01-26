// CODE WRITTEN BY KEVIN LEVASSEUR AND LANCE IRVING MANZANAL

const slantRightTranspose = function(matrix) { // adds * characters to slant our array. (index 0 of preceding element will be above index 1 of next element)
    const result = [];
    matrix.forEach((row, index)=> {
      const shiftedArray = row;
  
      for (let i = (matrix.length - index); i >= 0; i--) {
        shiftedArray.unshift("*");
      }
  
      result.push(shiftedArray);
    });
    return result;
  };
  
  // const slantLeftTranspose = function(matrix) { //This code is commented because it breaks stuff!
  //   const result = [];
  //   matrix.forEach((row, index)=> {
  //     const shiftedArray = row;
  
  //     for (let i = 0; i < index; i++) {
  //         shiftedArray.unshift("*");
  //     }
  
  //     result.push(shiftedArray);
  //   });
  //   console.log(result);
  // };
  
  const transpose = function(matrix) { // transposes our matrix from horizontal to vertical
  
    const result = {};
    matrix.forEach(row => {
      row.forEach((column, index) => {
        result[index] ||= []
        result[index].push(column);
      });
    });
    
    return Object.values(result);
  };
  
  const wordSearch = (letters, word) => { // THIS IS THE WORD SEARCH FUNCTION
  
    if (!Array.isArray(letters)) { // checks if our letters matrix is an array
      return false;
    }
  
    if (letters == []) { // checks if our matrix is an empty array
      return false;
    }
  
    
    const horizontalJoin = letters.map(ls => ls.join('')); // checks for words appearing horizontally (and also backwards)
    for (const l of horizontalJoin) {
      const reversedWord = word.split('').reverse().join('');
      if (l.includes(word) || l.includes(reversedWord)) {
        return true;
      }
    }
  
    const transposedMatrix = transpose(letters);
  
    const verticalJoin = transposedMatrix.map(ls => ls.join('')); // checks for words appearing vertically (and also backwards)
    for (const l of verticalJoin) {
      const reversedWord = word.split('').reverse().join('');
      if (l.includes(word) || l.includes(reversedWord)) {
        return true;
      }
    }
  
    const slantRightMatrix = slantRightTranspose(letters); // next 9 lines checks for words diagonally from left to right (and also backwards)
    const transposedSlantRightMatrix = transpose(slantRightMatrix);
  
    const slantRightJoin = transposedSlantRightMatrix.map(ls => ls.join(''));
    for (const l of slantRightJoin) {
      const reversedWord = word.split('').reverse().join('');
      if (l.includes(word) || l.includes(reversedWord)) {
        return true;
      }
    }
  
    //   const slantLeftMatrix = slantLeftTranspose(letters); // this code is commented because it breaks stuff
    //   const transposedSlantLeftMatrix = transpose(slantLeftMatrix);
  
    //   const slantLeftJoin = transposedSlantLeftMatrix.map(ls => ls.join(''));
    //   for (const l of slantLeftJoin) {
    //     const reversedWord = word.split('').reverse().join('');
    //     if (l.includes(word) || l.includes(reversedWord)) {
    //       return true;
    //     }
    //   }
  
    return false;
  };
  
  module.exports = wordSearch;