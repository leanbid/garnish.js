
def('set_style', function(name, value){
  this.each(function(){
    this.element.style[name] = value;
  });
  return this;
});
