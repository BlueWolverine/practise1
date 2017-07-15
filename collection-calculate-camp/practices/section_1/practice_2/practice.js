function collect_same_elements(collection_a, collection_b) {
  let result = [];
  collection_b = collection_b[0];
  if (collection_a.length <= collection_b.length) {
    for (let i = 0; i<collection_b,length; i++) {
      if (collection_a.indexOf(collection_b[i]) != -1) {
        result.push(collection_b[i]);
      }
    }
  } else {
    for (let i = 0; i<collection_a.length; i++) {
      if (collection_b.indexOf(collection_a[i]) != -1) {
        result.push(collection_a[i]);
      }
    }
  }
  return result;
}

var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
var collection_b = [["a", "d", "e", "f"]];
console.log(collect_same_elements(collection_a, collection_b));
module.exports = collect_same_elements;
