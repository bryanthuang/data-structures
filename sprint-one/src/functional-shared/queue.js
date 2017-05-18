var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue= {};
  newQueue.queueSize = 0;
  newQueue.storage = {};
  newQueue.index = 0;
  _.extend(newQueue, queueMethods)
  return queueMethods;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.index] = value;
  this.queueSize++;
  this.index++;
}

queueMethods.dequeue = function(){
  var firstElem = Object.keys(this.storage)[0];
  var temp = storage[firstElem];
  delete storage[firstElem];
  if (this.queueSize > 0) {
    this.queueSize--;
  } else {
    this.queueSize = 0;
  }
  return temp;
}

queueMethods.size = function(){
  return this.queueSize;
}
