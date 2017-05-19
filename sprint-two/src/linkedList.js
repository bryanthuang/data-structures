var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;
  list.addToTail = function(value) {
    //if list size is 0
      // add tail, add head
    var newNode = Node(value);
    if(this.size === 0){
      this.tail = newNode;
      this.head = newNode;
    } else if (this.size === 1) {
      this.head.next = newNode;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++
    //else
      //current tail -1, next = tail
        //set next as new tail that we are creating
  };

  list.removeHead = function() {
    var nextNode = this.head.next;
    var curNodeValue = this.head.value;
    this.head = nextNode;
    this.size--;
    return curNodeValue;
  };

  list.contains = function(target) {
    //use recursion to go into every node'
    // if(this.head.value === target){
    //   return true;
    // } else {
    //   var searchNodes = function()
    // }
    //
    var searchNodes = function(node){
      if(node.value === target){
        return true;
      }
      else if(node.next !== null ){
        return searchNodes(node.next)
      }
      return false;
    }
    return searchNodes(this.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
