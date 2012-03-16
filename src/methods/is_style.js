
def('is_style', function(name){
  return is_defined(this.element_list[0]) && is_defined(this.element_list[0].style) && is_defined(this.element_list[0].style[name]);
});
