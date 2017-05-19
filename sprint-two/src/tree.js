var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var exists = false;
  var searchNodes = function(node){
    if(node.value === target){
      return exists = true;
    }
    if(node.children.length > 0){
      _.each(node.children, function(child){
        searchNodes(child);
      })
    }
  }
  searchNodes(this)
  return exists;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
