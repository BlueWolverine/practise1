'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionB  = objectB.value;
  var temp = collectionA[0];
  var key = [];//记录字符
  var count = [];//记录字符数量
  var t = 0;//记录字符种数
  count[0] = 1;
  key[0] = temp;
  for (var i = 1; i<collectionA.length; i++) {
    if (collectionA[i]!=temp) {
      key.push(collectionA[i]);
      temp = collectionA[i];
      count[++t] = 1;
    }
    else {
      count[t]++;
    }
  }

  for (var i = 0; i<=t; i++) {
    for (var j = 0; j<collectionB.length; j++) {
      if(key[i] == collectionB[j]) {
        count[i] -= parseInt(count[i]/3);
      }
    }
  }
  var result = [];
  for (var i = 0; i<=t; i++) {
    result[i] = {};
    result[i].key = key[i];
    result[i].count = count[i];
  }
  return result;
}
