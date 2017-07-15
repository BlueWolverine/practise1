'use strict';

function get_letter_interval_2(number_a, number_b) {
  let result = [];
  let str = '';
  if (number_a == number_b) {
    if(number_a<=26) {
      return String.fromCharCode(number_a+96);
    } else {
      for(let j = 0; j<parseInt(number_a/26); j++) {
        str += 'a';
      }
      return str + String.fromCharCode(number_a%26+96);
    }
  } else if (number_a>number_b) {
    while (number_a>=number_b) {
      if(number_a<=26) {
      result.push(String.fromCharCode(number_a+96));
      number_a--;
    } else if (number_a>26&&number_a<52) {
          result.push('a' + String.fromCharCode(number_a%26+96));
        } else {
          result.push('b' + String.fromCharCode(number_a%26+96));
        }
          number_a --;
      }
  } else {
      while (number_b>=number_a) {
      if(number_a<=26) {
        result.push(String.fromCharCode(number_a+96));
        number_a++;
      } else if(number_a>26&&number_a<52) {
          result.push('a' + String.fromCharCode(number_a%26+96));
        } else {
          result.push('b' + String.fromCharCode(number_a%26+96));
        }
          number_a ++;
      }
    }  
  return result;
}

let collection_a = ['t', 'u', 'v', 'w', 'x',
    'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag',
    'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap',
    'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay',
    'az', 'ba'
  ];
  var collection_b = ['ba', 'az', 'ay', 'ax', 'aw', 'av', 'au', 'at',
    'as', 'ar', 'aq', 'ap', 'ao', 'an', 'am', 'al', 'ak', 'aj', 'ai',
    'ah', 'ag', 'af', 'ae', 'ad', 'ac', 'ab', 'aa', 'z', 'y', 'x',
    'w', 'v', 'u', 't'
  ];
  console.log(get_letter_interval_2(20, 53));
  console.log(get_letter_interval_2(53, 20));
  console.log(get_letter_interval_2(28, 28));
module.exports = get_letter_interval_2;

