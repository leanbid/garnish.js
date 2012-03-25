
def('set_property', function(name, value){
  this.element[name] = value;
  return this;
});
