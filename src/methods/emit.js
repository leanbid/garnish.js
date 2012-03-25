
def('emit', function(name){
  var args = [];
  for(var i = 1; i < arguments.length; i++){
    args.push(arguments[i]);
  }
  
  var shared_vars = this.shared_vars();
  if(!is_defined(shared_vars.slots)){
    shared_vars.slots = {};
  }
  var slots = shared_vars.slots;
  if(!is_defined(slots[name])){
   slots[name] = [];
  }
  var fn_list = slots[name];
  for(var i in fn_list){
    fn_list[i].apply(this, args);
  }
  
  return this;
});

