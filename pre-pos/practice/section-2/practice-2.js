'use strict';

function countSameElements(collection) {
  var temp = collection[0];
  var key = [];//记录字符
  var count = [];//记录字符数量
  var t = 0;//记录字符种数
  count[0] = 1;
  key[0] = temp;
    for (var i = 1; i<collection.length; i++) {
      if (collection[i].length==1) {
        if (collection[i]!=temp) {
          key.push(collection[i]);
          temp = collection[i];
          count[++t] = 1;
        }
        else {
          count[t]++;
        }
      }
      else {
        var arr = collection[i].split("");
          key.push(arr[0]);
          count.push(parseInt(arr[2]));
          t++;
        
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
