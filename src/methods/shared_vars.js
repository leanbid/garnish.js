
def('shared_vars', function(){
  if(!is_defined(this.element_list[0]._garnish_shared_vars)){
    this.element_list[0]._garnish_shared_vars = {};
  }
  return this.element_list[0]._garnish_shared_vars;
});
