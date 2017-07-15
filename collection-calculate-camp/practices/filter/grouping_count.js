'use strict';

function grouping_count(collection) {
  let result = new Map();//map
  result.set(collection[0], 1);
  let temp;
  for (let i = 1; i<collection.length; i++) {
    if(result.has(collection[i])) {
      temp = result.get(collection[i]) + 1;
      result.set(collection[i], temp);
    } else {
      result.set(collection[i], 1);
    }
  }
  return result;
}

var collection = [1,1,1,1,2,3,1,3,4,2,3,1,3,4,2];
console.log(grouping_count(collection));
module.exports = grouping_count;
