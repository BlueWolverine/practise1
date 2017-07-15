'use strict';

function compare_collections(collection_a, collection_b) {
  if(collection_a.length != collection_b.length) {
    return false;
  }
  for(let i = 0; i<collection_a.length; i++) {
    for(let j = 0; j<collection_b.length; j++) {
      if(collection_a[i] != collection_b[j]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = compare_collections;


