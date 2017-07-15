'use strict';
var number_map_to_word = function(collection){
  let result = [];
  for (let i = 0; i<collection.length; i++) {
    result[i] = String.fromCharCode(collction[i]+96);
  }
  return result;
};

let array = [1,2,3,4];
console.log(number_map_to_word(array));

module.exports = number_map_to_word;
