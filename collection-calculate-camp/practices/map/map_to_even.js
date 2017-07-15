'use strict';
function map_to_even(collection){
  let result = [];
  for(let i = 0; i<collection.length; i++) {
    result[i] = 2 * collection[i];
  }
  return result;
}
let array = [1,2,3,4];
console.log(map_to_even(array));
module.exports = map_to_even;
