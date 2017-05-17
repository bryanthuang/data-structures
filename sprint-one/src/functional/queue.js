var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var index = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    size++
    index++;
  };

  someInstance.dequeue = function() {
    var firstElem = Object.keys(storage)[0]
    var temp = storage[firstElem];
    delete storage[firstElem];
    size--;
    return temp;
  };

  someInstance.size = function() {
    return size <= -1 ? 0 : size;
  };

  return someInstance;
};
