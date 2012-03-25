
def('parent', function(){
  if(is_defined(this._parent)){
    return this._parent;
  }
  return wrap(this.element.parentNode);
});

