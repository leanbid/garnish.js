
def('set_property', function(name, value){
  this.each(function(){
    this.element_list[0][name] = value;
  });
  return this;
});
