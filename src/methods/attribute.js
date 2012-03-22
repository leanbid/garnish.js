
def('attribute', function(name){
  return this.is_attribute(name) ? this.element.attributes[name].value : arguments[1];
});
