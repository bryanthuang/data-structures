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
    if (size <= 0) {
      size = 0;
    } else {
      size--;
    }

    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
//write
