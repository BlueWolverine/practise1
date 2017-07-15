'use strict';
var rank_asc = function(collection){
  collection.sort(function (x, y) {
    if (x < y) {
        return 1;
    }
    if (x > y) {
        return -1;
    }
    return 0;
})
  return collection;
};

let array = [3,6,4,9,1];
console.log(rank_asc(array));
module.exports = rank_asc;
