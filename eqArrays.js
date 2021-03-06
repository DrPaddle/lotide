// Function Implementation

const assertEqual = require("./assertEqual");

const eqArrays = function (array1, array2){

    if (array1.length !== array2.length) {
      return false;
    } for (let i = 0; i < array2.length; i++) {
      if (array1[i] !== array2[i]){
        return false;
      }
    }
    return true;
}

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

module.exports = eqArrays;