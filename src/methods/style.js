
def('style', function(name){
  return this.is_style(name) ? this.element.style[name] : arguments[1];
});
