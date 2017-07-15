'use strict';
var single_element = function(collection){
    let result = [];
    let even_position = [];
    let del = [];
    let finResult = [];
  if (collection.length%2 == 0) {
      for (let i = 0; i<collection.length; i+=2) {
        even_position.push(collection[i+1]);
      }
  } else {
      for (let i = 0; i<collection.length-1; i+=2) {
          even_position.push(collection[i+1]);
      }
  }
  for (let i = 0; i<even_position.length; i++) {
      if(result.indexOf(even_position[i]) == -1) {
          result.push(even_position[i]);
      } else {
          del.push(even_position[i]);
      }
  }
  for (let i = 0; i<even_position.length; i++) {
    if(del.indexOf(even_position[i]) == -1) {
        finResult.push(even_position[i]);
    }
  }
  
  return finResult;
};

var collection_a = [1, 2, 3, 2, 5, 6, 21, 43, 12, 5];
var collection_b = [11, 11, 22, 11, 33, 11];
console.log(single_element(collection_a));
console.log(single_element(collection_b));
module.exports = single_element;
