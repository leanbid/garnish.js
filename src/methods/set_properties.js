
def('set_properties', function(properties){
  this.each(function(){
    for(var i in properties){
      this.set_property(i, properties[i]);
    }
  });
  return this;
});
