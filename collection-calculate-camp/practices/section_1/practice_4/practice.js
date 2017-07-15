function collect_same_elements(collection_a, collection_b) {
  let result = [];
  collection_b = collection_b.value;
  for (let i = 0; i<collection_a.length; i++) {
    if (collection_b.indexOf(collection_a[i].key) != -1) {
      result.push(collection_a[i].key);
    }
  }
  return result;
}

var collection_a = [
    {key: "a"}, {key: "e"}, {key: "h"}, {key: "t"}, {key: "f"}, {key: "c"}, {key: "g"}, {key: "b"}, {key: "d"}
  ];
var collection_b = {value: ["a", "d", "e", "f"]};
console.log(collect_same_elements(collection_a, collection_b));
module.exports = collect_same_elements;
