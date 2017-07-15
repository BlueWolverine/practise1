'use strict';

function hybrid_operation_to_uneven(collection) {
  let sum = 0;
  for (let i = 0; i<collection.length; i++) {
    if (collection[i]%2 != 0) {
      sum += collection[i]*3 + 5;
    }
  }
  return sum;
}

var collection = [1,5,7,12,11,35,54,67,70];
console.log(hybrid_operation_to_uneven(collection));
module.exports = hybrid_operation_to_uneven;

