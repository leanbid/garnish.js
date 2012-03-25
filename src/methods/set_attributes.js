
def('set_attributes', function(attributes){
  for(var i in attributes){
    this.set_attribute(i, attributes[i]);
  }
  return this;
});
