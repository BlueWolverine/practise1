'use strict';

function get_letter_interval(number_a, number_b) {
  let result = [];
  let str = '';
  if (number_a == number_b) {
    return String.fromCharCode(number_a+96);
  } else if (number_a>number_b) {
    while (number_a>=number_b) {
      result.push(String.fromCharCode(number_a+96));
      number_a--;
    }
  } else {
      while (number_b>=number_a) {
        result.push(String.fromCharCode(number_a+96));
        number_a ++;
      }
    }  
  return result;
}

var collection_a = ['a', 'b', 'c', 'd', 'e'];
var collection_b = ['e', 'd', 'c', 'b', 'a'];
console.log(get_letter_interval(1,5));
console.log(get_letter_interval(5,1));
console.log(get_letter_interval(5,5));
module.exports = get_letter_interval;
