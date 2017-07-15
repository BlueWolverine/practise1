'use strict';

function average_to_letter(collection) {
  let sum = 0;
  let aver;
  let result;
  for (let i = 0; i<collection.length; i++) {
    sum += collection[i];
  }
  aver = Math.ceil(sum/collection.length);
  //console.log(aver)
  result = String.fromCharCode(aver+96);
  return result;
}
var collection = [1,2,3,4,5,6,7,8,9,10];
console.log(average_to_letter(collection));
module.exports = average_to_letter;

