'use strict';
var is_exist_element = function(collection,element){
    let even_position = [];
  if (collection.length%2 == 0) {
    for (let i = 0; i<collection.length; i+=2) {
      even_position.push(collection[i+1]);
    }
  } else {
      for (let i = 0; i<collection.length-1; i+=2) {
          even_position.push(collection[i+1]);
      }
  }
  //console.log(even_position);
  for (let i = 0; i<even_position.length; i++) {
      if (even_position[i] == element) {
          return true;
      }
  }
  return false;
};

var collection_a = [1, 2, 3, 4, 5, 6];
console.log(is_exist_element(collection_a, 4));
console.log(is_exist_element(collection_a, 3));
module.exports = is_exist_element;
