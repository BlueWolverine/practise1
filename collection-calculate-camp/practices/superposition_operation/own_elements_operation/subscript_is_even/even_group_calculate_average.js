'use strict';
var even_group_calculate_average = function(collection){
  let even_position = [];
  let one_bite = [];
  let two_bite = [];
  let three_bite = [];
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  let result = [];
  let finResult = [];
  if (collection.length == 1) {
      finResult.push(0);
  }
  if (collection.length%2 == 0) {
    for (let i = 0; i<collection.length; i+=2) {
      even_position.push(collection[i+1]);
    }
  } else {
      for (let i = 0; i<collection.length-1; i+=2) {
          even_position.push(collection[i+1]);
      }
  }
  for(let i = 0; i<even_position.length; i++) {
      if (even_position[i]<10) {
        one_bite.push(even_position[i]);
      } else if (even_position[i]>=10&&even_position[i]<100) {
          two_bite.push(even_position[i]);
      } else {
          three_bite.push(even_position[i]);
      }
  }

  for (let i = 0; i<one_bite.length; i++) {
    sum1 += one_bite[i];
  }
  result.push(parseInt(sum1/one_bite.length));

  for (let i = 0; i<two_bite.length; i++) {
    sum2 += two_bite[i];
  }
  result.push(parseInt(sum2/two_bite.length));

  for (let i = 0; i<three_bite.length; i++) {
    sum3 += three_bite[i];
  }
  result.push(parseInt(sum3/three_bite.length)); 
  
  for (var i = 0; i<result.length; i++) {
      if (result[i]) {
          finResult.push(result[i]);
      }
  }
  return finResult;
};



var collection_a = [1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14];
var collection_b = [1, 3, 5, 7, 33, 55, 31, 555, 777];
var collection_c = [344, 256, 55, 777, 322, 180];
console.log(even_group_calculate_average(collection_a));
console.log(even_group_calculate_average(collection_b));
console.log(even_group_calculate_average(collection_c));
module.exports = even_group_calculate_average;
