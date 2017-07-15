'use strict';

function find_first_even(collection) {
  for (let i = 0; i<collection.length; i++) {
    if (collection[i]%2 == 0) {
      return collection[i];
    }
  }
  return 'no even';
}

let array = [3,5,3,1,5,2];
console.log(find_first_even(array));
module.exports = find_first_even;

