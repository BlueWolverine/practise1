'use strict';

function compute_average(collection) {
  let sum = 0;
  for (let i = 0; i<collection.length; i++) {
    sum += collection[i];
  }
  return sum/collection.length;
}
let array = [1,3,5,4];
console.log(compute_average(array));

module.exports = compute_average;

