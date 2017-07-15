'use strict';
var number_map_to_word_over_26 = function(collection){
  let result = [];
  for(let i = 0; i<collection.length; i++) {
    let str = '';
    if(collection[i]<=26) {
      result[i] = String.fromCharCode(collection[i]+96);
    } else {
      for(let j = 0; j<parseInt(collection[i]/26); j++) {
        str += 'a';
      }
      result[i] = str + String.fromCharCode(collection[i]%26+96);
    }
  }
  return result;
};
let array = [1,11,31];
console.log(number_map_to_word_over_26(array));

module.exports = number_map_to_word_over_26;
