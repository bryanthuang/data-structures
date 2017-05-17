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
    size--;
    return storage[size];
  };

  someInstance.size = function() {
    return size <= -1 ? 0 : size;
  };

  return someInstance;
};
