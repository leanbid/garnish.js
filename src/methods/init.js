
def('init', function(){
  this.each(function(){
    for(var i in initializer_list){
      initializer_list[i].call(this)
    }
  });
  return this;
});
