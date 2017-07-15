'use strict';

function calculate_elements_sum(collection, element) {
  for (let i = collection.length; i>=0; i--) {
    if (collection[i] == element) {
      return i;
    }
  }
  return 'no element';
}

let array = [2,4,6,4,5,4];
console.log(calculate_elements_sum(array,3));
console.log(calculate_elements_sum(array,4));
module.exports = calculate_elements_sum;
