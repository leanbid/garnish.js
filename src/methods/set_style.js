
def('set_style', function(name, value){
  this.element.style[name] = value;
  return this;
});
