'use strict';
var rank_desc = function(collection){
  collection.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
  return collection;
};

let array = [2,4,3,8,1];
console.log(rank_desc(array));
module.exports = rank_desc;
