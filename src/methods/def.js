
def('def', function(name, fn){
  this.each(function(){
    var shared_vars = this.shared_vars();
    if(!is_defined(shared_vars.methods)){
      shared_vars.methods = {};
    }
    shared_vars.methods[name] = fn;
    this[name] = fn;
  });
  
  var shared_vars = this.shared_vars();
  if(!is_defined(shared_vars.methods)){
    shared_vars.methods = {};
  }
  shared_vars.methods[name] = fn;
  this[name] = fn;

  return this;
});

