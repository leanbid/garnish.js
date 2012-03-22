
def('is_property', function(name){
  return is_defined(this.element[name]);
});
