'use strict';

function compute_chain_median(collection) {
  let array = collection.split('->');
  let median;
  for (let i = 0; i<array.length; i++) {
    array[i] = parseInt(array[i]);
  }
  array.sort(function(x, y) {
    if(x<y) {
      return -1;
    } else if(x>y) {
      return 1;
    } else {
      return 0;
    }
  });
  //console.log(array);
  if (array.length%2 == 0) {
    median = (array[array.length/2] + array[array.length/2-1])/2;
  } else {
    median = array[parseInt(array.length/2)];
  }
  return median;
}

let chain = '1->4->6->2->3->10->9->8->11->20->19->30';
console.log(compute_chain_median(chain));

module.exports = compute_chain_median;
