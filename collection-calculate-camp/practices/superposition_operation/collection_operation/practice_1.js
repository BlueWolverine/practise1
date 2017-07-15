'use strict';

function hybrid_operation(collection) {
  let sum = 0;
  for (let i = 0; i<collection.length; i++) {
    sum += collection[i]*3 + 2;
  }
  return sum;
}

var collection = [1,5,7,11,35,67];
console.log(hybrid_operation(collection));
module.exports = hybrid_operation;

