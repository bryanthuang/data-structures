

// Instantiate a new graph
var Graph = function() {
  this.vertex = {}
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertex[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.vertex.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for(var i = 0; i < this.vertex[node].length; i++){
    this.removeEdge(node, this.vertex[node][i]);
  }
  delete this.vertex[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.vertex[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.vertex[fromNode].push(toNode);
  this.vertex[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index1 = _.indexOf(this.vertex[fromNode], toNode);
  var index2 = _.indexOf(this.vertex[toNode], fromNode);
  this.vertex[fromNode].splice(index1, 1);
  this.vertex[toNode].splice(index2, 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.vertex) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
