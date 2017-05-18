var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.queueSize = 0;
  this.storage = {};
  this.index = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.index] = value;
  this.queueSize++;
  this.index++;
}

Queue.prototype.dequeue = function(){
  var firstElem = Object.keys(this.storage)[0];
  var temp = this.storage[firstElem];
  delete this.storage[firstElem];
  if (this.queueSize > 0) {
    this.queueSize--;
  } else {
    this.queueSize = 0;
  }
  return temp;
}

Queue.prototype.size = function(){
  return this.queueSize;
}
