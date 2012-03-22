
def('shared_vars', function(){
  if(!is_defined(this.element._garnish_shared_vars)){
    this.element._garnish_shared_vars = {};
  }
  return this.element._garnish_shared_vars;
});
