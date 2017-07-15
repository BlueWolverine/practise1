'use strict';

function calculate_elements_sum(collection, element) {
  for (let i = 0; i<collection.length; i++) {
    if (collection[i] == element) {
      return i;
    }
  }
  return 'no element';
}

let array = [3,2,4,6,7];
console.log(calculate_elements_sum(array, 4));

module.exports = calculate_elements_sum;

