
ElementWrapperArray.prototype['reverse'] = function(condition){
  var out = new ElementWrapperArray();
  for(var i = this.length - 1; i >= 0; i--){
    out.push(this[i]);
  }
  return out;
};

