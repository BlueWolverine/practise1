'use strict';

function compute_median(collection) {
  let median;
  if (collection.length%2 == 0) {
    median = (collection[collection.length/2] + collection[collection.length/2-1])/2;
  } else {
    median = collection[parseInt(collection.length/2)];
  }
  return median;
}

let array_1 = [1,3,5,4];
let array_2 = [1,3,2,4,7];
console.log(compute_median(array_1));
console.log(compute_median(array_2));
module.exports = compute_median;


