
def('is_attribute', function(name){
  return is_defined(this.element_list[0].attributes) && is_defined(this.element_list[0].attributes[name]);
});
