
def('def', function(name, fn){
  this[name] = fn;
  return this;
});

