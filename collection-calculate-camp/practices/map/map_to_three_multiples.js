'use strict';
var map_to_three_multiples = function(collections){
  let result = [];
  for(let i = 0; i<collections.length; i++) {
    result[i] = collections[i] * 3;
  }
  return result;
};
let array = [1,2,3,4];
console.log(map_to_three_multiples(array));
module.exports = map_to_three_multiples;
