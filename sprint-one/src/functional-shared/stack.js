var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.size = 0;
  ._extend(newStack, Stack.stackMethods)
  return newStack;
};

var stackMethods = {};

Stack.stackMethods.push = function(value){
  this.size++;
}
Stack.stackMethods.pop = function(){
  this.size--;
}
Stack.stackMethods.size = function(){
  return this.size 
}
