'use strict';

function find_last_even(collection) {
  for (let i = collection.length-1; i>=0; i--) {
    if (collection[i]%2 == 0) {
      return collection[i];
    }
  }
  return 'no even';
}

let array = [2,3,6,4,9];
console.log(find_last_even(array));
module.exports = find_last_even;
