'use strict';
var even_asc_odd_desc = function(collection){
  let even = [];
  let odd = [];
  for (let i = 0; i<collection.length; i++) {
      if(collection[i]%2 == 0) {
          even.push(collection[i]);
      } else {
          odd.push(collection[i]);
      }
  }
  for (let i = 0; i<even.length; i++) {
      even.sort(function(x,y) {
          if(x>y) {
              return 1;
          } else if (x<y) {
              return -1;
          } else {
              return 0;
          }
      });
  }
  for (let i = 0; i<odd.length; i++) {
      odd.sort(function(x,y) {
          if(x>y) {
              return -1;
          } else if (x<y) {
              return 1;
          } else {
              return 0;
          }
      });
  }
  for (let i = 0; i<odd.length; i++) {
      even.push(odd[i]);
  }
  return even;
};

var collection_a = [4, 32, 12, 45, 67, 46, 2, 53, 68, 54, 11];
var collection_b = [2, 4, 12, 32, 46, 54, 68, 67, 53, 45, 11];
console.log(even_asc_odd_desc(collection_a));
module.exports = even_asc_odd_desc;
