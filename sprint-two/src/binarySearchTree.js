var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

// O(log n)
BinarySearchTree.prototype.insert = function(value){
  if (value < this.value) {
    //left value exist
    if(this.left === null){
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }

  if (value > this.value){
    if(this.right === null){
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(value){
  var contains = false
  this.depthFirstLog(function(nodeValue){
    if (value === nodeValue) {
      contains = true;
    }
  })
  return contains;
}


BinarySearchTree.prototype.depthFirstLog = function(callback){
  callback(this.value);
  if(this.left !== null){
    this.left.depthFirstLog(callback);
  }
  if(this.right !== null){
    this.right.depthFirstLog(callback);
  }

}

/*
 * Complexity: What is the time complexity of the above functions?
 */
