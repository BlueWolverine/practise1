'use strict';

function hybrid_operation_to_uneven(collection) {
  for (let i = 0; i<collection.length; i++) {
    if (collection[i]%2 != 0) {
      collection[i] = collection[i]*3 + 2;
    }
  }
  return collection;
}

var collection = [1,5,7,12,11,35,54,67,70];
console.log(hybrid_operation_to_uneven(collection));
module.exports = hybrid_operation_to_uneven;

