'use strict';

function collect_max_number(collection) {
  let max = collection[0];
  for (let i = 1; i<collection.length; i++) {
    if(collection[i]>max) {
      max = collection[i];
    }
  }
  return max;
}

let array = [1,3,8,4];
console.log(collect_max_number(array));
module.exports = collect_max_number;
