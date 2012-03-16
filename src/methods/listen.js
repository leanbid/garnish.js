
def('listen', function(name, fn){
  this.each(function(){
    var shared_vars = this.shared_vars();
    if(!is_defined(shared_vars.slots)){
      shared_vars.slots = {};
    }
    var slots = shared_vars.slots;
    if(!is_defined(slots[name])){
     slots[name] = [];
    }
    slots[name].push(fn);
  });
  return this;
});

