
def('parent', function(){
  if(is_defined(this.shared_vars().parent)){
    return this.shared_vars().parent;
  }
  return wrap(this.element_list[0].parentNode);
});

