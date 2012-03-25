
def('emit', function(name){
  var args = [];
  for(var i = 1; i < arguments.length; i++){
    args.push(arguments[i]);
  }
  
  if(!is_defined(this._slots)){
    this._slots = {};
  }
  if(!is_defined(this._slots[name])){
   this._slots[name] = [];
  }
  var fn_list = this._slots[name];
  for(var i in fn_list){
    fn_list[i].apply(this, args);
  }
  
  return this;
});

