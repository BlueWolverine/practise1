'use strict';
function rank_by_two_large_one_small(collection){
  let result = [];
  collection.sort(function(x, y) {
    if(x>y) {
      return 1;
    } else if (x<y) {
      return -1;
    } else {
      return 0;
    }
  });
    for (let i = 0; i<collection.length-2; i += 3) {
      result.push(collection[i+1]);
      result.push(collection[i+2]);
      result.push(collection[i]);
    }
    if (collection.length%3 != 0) {
      for (let i = collection.length%3; i>0; i--) {
        result.push(collection[collection.length-i]);
      }
    }
  return result;
}

let collection_a = [2, 8, 1, 9, 6, 4, 3, 10];
console.log(rank_by_two_large_one_small(collection_a));
module.exports = rank_by_two_large_one_small;
