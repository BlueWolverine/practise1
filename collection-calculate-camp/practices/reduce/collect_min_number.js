'use strict';

function collect_max_number(collection) {
  let min = collection[0];
  for (let i = 1; i<collection.length; i++) {
    if(collection[i]<min) {
      min = collection[i];
    }
  }
  return min;
}

let array = [1,3,8,4];
console.log(collect_max_number(array));
module.exports = collect_max_number;
