'use strict';

function even_to_letter(collection) {
  let even = [];
  let result = [];
  for(let i = 0; i<collection.length; i++) {
    if(collection[i]%2 == 0) {
      even.push(collection[i]);
    }
  }
  for (let i = 0; i<even.length; i++) {
    result[i] = String.fromCharCode(even[i]+96);
  }
  return result;
}

let collection = [1,2,3,4,5,6,7,8,9,10];
console.log(even_to_letter(collection));
module.exports = even_to_letter;
