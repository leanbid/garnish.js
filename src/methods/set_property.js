
def('set_property', function(name, value){
  this.each(function(){
    this.element[name] = value;
  });
  return this;
});
