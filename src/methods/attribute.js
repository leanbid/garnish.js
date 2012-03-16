
def('attribute', function(name){
  return this.is_attribute(name) ? this.element_list[0].attributes[name].value : arguments[1];
});
