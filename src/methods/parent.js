
def('parent', function(){
  if(is_defined(this.shared_vars().parent)){
    return this.shared_vars().parent;
  }
  return wrap(this.element.parentNode);
});

