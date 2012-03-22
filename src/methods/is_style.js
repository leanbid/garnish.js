
def('is_style', function(name){
  return is_defined(this.element) && is_defined(this.element.style) && is_defined(this.element.style[name]);
});
