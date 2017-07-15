'use strict';

function get_integer_interval(number_a, number_b) {
  let result = [];
  if (number_a == number_b) {
      return number_a;
  } else if (number_a>number_b) {
    while (number_a>=number_b) {
        result.push(number_a);
        number_a --;
      }
    } else {
        while (number_b>=number_a) {
          result.push(number_a);
          number_a ++;
        }
      } 
  return result;
}

var collection_a = [1, 2, 3, 4, 5];
var collection_b = [5, 4, 3, 2, 1];
console.log(get_integer_interval(1,5));
console.log(get_integer_interval(5,1));
module.exports = get_integer_interval;

