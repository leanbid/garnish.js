
def('set_style', function(name, value){
  this.each(function(){
    this.element_list[0].style[name] = value;
  });
  return this;
});
