'use strict';

function get_integer_interval_2(number_a, number_b) {
  let result = [];
  if (number_a == number_b) {
    if (number_a%2 == 0) {
      return number_a;
    } else  {
      return 'error input';
    }
  } else if (number_a>number_b) {
    while (number_a>=number_b) {
      if (number_a%2 == 0) {
        result.push(number_a);
        number_a -= 2;
      } else {
        result.push(number_a-1);
        number_a -= 3;
      }
    }
  } else {
      while (number_b>=number_a) {
        if (number_a%2 == 0) {
          result.push(number_a);
          number_a += 2;
        } else {
          result.push(number_a+1);
          number_a += 3;
        }
      } 
    }
  return result;
}

var collection_a = [2, 4, 6, 8, 10];
var collection_b = [10, 8, 6, 4, 2];
console.log(get_integer_interval_2(1,10));
console.log(get_integer_interval_2(10,1));
module.exports = get_integer_interval_2;
