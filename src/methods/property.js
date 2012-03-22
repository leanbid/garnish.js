
def('property', function(name){
  return this.is_property(name) ? this.element[name] : arguments[1];
});
