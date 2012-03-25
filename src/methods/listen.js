
def('listen', function(name, fn){
  if(!is_defined(this._slots)){
    this._slots = {};
  }
  if(!is_defined(this._slots[name])){
   this._slots[name] = [];
  }
  this._slots[name].push(fn);
  return this;
});

