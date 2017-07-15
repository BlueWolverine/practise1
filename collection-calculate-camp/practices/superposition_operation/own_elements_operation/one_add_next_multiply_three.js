'use strict';
function one_add_next_multiply_three(collection){
  let result = [];
  for (let i = 0; i<collection.length-1; i++) {
    result.push((collection[i]+collection[1+i])*3);
  }
  return result;
}

var collection_a = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
var collection_b = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120];
console.log(one_add_next_multiply_three(collection_a));
module.exports = one_add_next_multiply_three;
