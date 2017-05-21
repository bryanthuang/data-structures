

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  //if index doesnt have array
  if (this._storage.get(index) === undefined) {
    var bucket = [[k,v]];
    this._storage.set(index, bucket);
    this._size++;
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
      this._size++;
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
        this._size--;
      }
    })
  }
  if(this._size / this._limit < 0.25) {
    this
  }
  return result;
};

HashTable.prototype.rehash = function(){

};

HashTable.prototype.resize = function(limit){
  var oldStorage = this._storage;
  this._storage = LimitedArray(limit);
  for(var i =0; i < oldStorage.length; i++){
    for (var j = 0; j < oldStorage[i].length; j++){
      this.insert(oldStorage[i][j][0], oldStorage[i][j][1])
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
