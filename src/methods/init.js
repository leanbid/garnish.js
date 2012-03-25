
def('init', function(){
  for(var i in initializer_list){
    initializer_list[i].call(this);
  }
  return this;
});
