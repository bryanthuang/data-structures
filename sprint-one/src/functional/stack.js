var Stack = function() {
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;

  };

  someInstance.pop = function() {
    if (size <= 0) {
      size = 0;
    } else {
      size--;
    }
    return storage[size];
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
