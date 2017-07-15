'use strict';

function spilt_to_zero(number, interval) {
  let result = [];
  while(number+interval>=0) {
    result.push(number.toFixed(1));
    number -= interval;
  }
  return result;
}

var collection_a = [0.8, 0.6, 0.4, 0.2, 0];
var collection_b = [0.7, 0.4, 0.1, -0.2];
console.log(spilt_to_zero(0.8, 0.2));
console.log(spilt_to_zero(0.7, 0.3));
module.exports = spilt_to_zero;
