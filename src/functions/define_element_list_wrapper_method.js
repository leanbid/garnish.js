

function define_element_list_wrapper_method(name, fn){
  ElementListWrapper.prototype[name] = fn;
}

