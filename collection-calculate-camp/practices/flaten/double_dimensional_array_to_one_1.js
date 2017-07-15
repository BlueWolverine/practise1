'use strict';

function double_to_one(collection) {
  let result = [];
  for (let i = 0; i<collection.length; i++) {
    if(collection[i].length <= 1) {
      result.push(collection[i][0]);
    } else {
      for (let j = 0; j<collection[i].length; j++) {
        result.push(collection[i][j]);
      }
    }
  }
  return result;
}

let array = [[2,3,4],[6],[1,3]];
console.log(double_to_one(array));
module.exports = double_to_one;
