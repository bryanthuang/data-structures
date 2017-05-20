

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //if index doesnt have array
  if (this._storage.get(index) === undefined) {
    var bucket = [[k,v]];
    this._storage.set(index, bucket);
  } else{
    var isUpdate = false;
    var bucket = this._storage.get(index);
    bucket.forEach(function(elem, i){
      if(elem[0] === k){
        isUpdate = true;
        elem[1] = v;
      }
    })
    if (!isUpdate) {
      bucket.push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k){
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // console.log(bucket)
  if (bucket !== undefined) {
    var result;
    bucket.forEach(function(elem, i){
      if(elem[0] === k){
        result = elem;
        bucket.splice(i ,1);
      }
    })
  }
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
