

function define_element_wrapper_method(name, fn){
    ElementWrapper.prototype[name] = fn;
}

