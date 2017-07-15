'use strict';

function calculate_elements_sum(collection) {
  let sum = 0;
  for (let i = 0; i<collection.length; i++) {
    sum += collection[i];
  }
  return sum;
}

let array = [1,2,3,4,7];
console.log(calculate_elements_sum(array));
module.exports = calculate_elements_sum;

