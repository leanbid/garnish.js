
function def(name, fn){
  
  function define_methods(name, fn){
    define_element_wrapper_method(name, fn);
    define_element_list_wrapper_method(name, function(){
      var args = [];
      for(var i = 0; i < arguments.length; i++){
        args[i] = arguments[i];
      }
      var out = [];
      this.each(function(){
        out.push(fn.apply(this, args));
      });
      return out;
    });
  }
  
  var matches;
  if(matches = name.match(/^init_([\w_]+)$/)){
    var object_name = matches[1];
    define_methods(name, function(){
      this.shared_vars()['is_' + object_name] = true;
      return fn.apply(this, arguments);
    });
    define_methods('is_' + object_name, function(){
      return is_defined(this.shared_vars()['is_' + object_name]);
    });
  } else {
    define_methods(name, fn);
  }
}

garnish.def = def;
