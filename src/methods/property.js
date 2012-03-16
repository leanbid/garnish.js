
def('property', function(name){
  return this.is_property(name) ? this.element_list[0][name] : arguments[1];
});
