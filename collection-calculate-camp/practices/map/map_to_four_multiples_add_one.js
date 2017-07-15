'use strict';
var map_to_four_multiples_add_one = function(collection){
  let result = [];
  for(var i = 0; i<collection.length; i++) {
    result[i] = collection[i] * 4 + 1;
  }
  return result;
};
let array = [1,2,3,4];
console.log(map_to_four_multiples_add_one(array));

module.exports = map_to_four_multiples_add_one;
