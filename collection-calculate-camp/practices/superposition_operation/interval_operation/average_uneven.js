'use strict';

function average_uneven(collection) {
  let sum = 0;
  let aver;
  let t = 0;
  for (let i = 0; i<collection.length; i++) {
    if(collection[i]%2 != 0) {
      sum += collection[i];
      t++
    }
  }
  aver = sum/t;

  return aver;
}
var collection = [1,2,3,4,5,6,7,8,9,10];
console.log(average_uneven(collection));
module.exports = average_uneven;
