
function wrap(element){
  if(is_defined(element.element_wrapper)){
    return element.element_wrapper;
  }
  return new ElementWrapper(element);
}

garnish.wrap = wrap
