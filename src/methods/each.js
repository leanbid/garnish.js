
ElementWrapperArray.prototype['each'] = function(fn){
  try {
    for(var i = 0; i < this.length; i++){
      fn.call(this[i]);
    }
  } catch(e){
    if(e != brk){
      throw e;
    }
  }
  return this;
};
