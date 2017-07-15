'use strict';

function median_to_letter(collection) {
  let median;
  let result;
  let str = '';
  if (collection.length%2 == 0) {
    median = (collection[collection.length/2] + collection[collection.length/2-1])/2;
  } else {
    median = collection[parseInt(collection.length/2)];
  }
  //console.log(median);
  if(median<=26) {
      result = String.fromCharCode(median+96);
    } else {
      for(let j = 0; j<parseInt(median/26); j++) {
        str += 'a';
      }
      result = str + String.fromCharCode(median%26+97);
    }
    return result;
}

var collection = [20,21,22,23,24,25,26,27,28,29,
                    30,31,32,33,34,35,36,37,38,39,
                    40,41,42,43,44,45,46,47,48,49,
                    50,51,52,53];
console.log(median_to_letter(collection));
module.exports = median_to_letter;
