var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value){
  if (value <  this.value) {
    this.left = value;
  } else if (value > this.value) {
    this.right = value;
  }
}

BinarySearchTree.prototype.contains = function(value){
  // return //true/false

}


BinarySearchTree.prototype.depthFirstLog = function(callback){

}

/*
 * Complexity: What is the time complexity of the above functions?
 */
