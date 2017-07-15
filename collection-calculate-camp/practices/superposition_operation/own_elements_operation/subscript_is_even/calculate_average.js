'use strict';
var calculate_average = function(collection){
  let sum = 0;
  let t = 0; 
  if(collection.length%2 == 0) {
    for(let i = 0; i<collection.length-1; i++) {
      sum += collection[i+1];
      t++;
    }
  } else {
      for(let i = 0; i<collection.length; i++) {
        sum += collection[i+1];
        t++;
      }
  }
  return sum/t;
};

var collection_a = [1, 2, 3, 4, 5, 6];
console.log(calculate_average(collection_a));
module.exports = calculate_average;
