
def('set_attributes', function(attributes){
  this.each(function(){
    for(var i in attributes){
      this.set_attribute(i, attributes[i]);
    }
  });
  return this;
});
