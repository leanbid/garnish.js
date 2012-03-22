
def('is_attribute', function(name){
  return is_defined(this.element.attributes) && is_defined(this.element.attributes[name]);
});
