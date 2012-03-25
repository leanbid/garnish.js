
function def(name, fn){
  
  function define_methods(name, fn){
    ElementWrapper.prototype[name] = fn;
    ElementWrapperArray.prototype[name] = function(){
      var args = [];
      for(var i = 0; i < arguments.length; i++){
        args[i] = arguments[i];
      }
      var out = [];
      this.each(function(){
        out.push(fn.apply(this, args));
      });
      return out;
    };
  }
  
  var matches;
  if(matches = name.match(/^init_([\w_]+)$/)){
    var object_name = matches[1];
    define_methods(name, function(){
      this['_is_' + object_name] = true;
      return fn.apply(this, arguments);
    });
    define_methods('is_' + object_name, function(){
      return is_defined(this['_is_' + object_name]);
    });
  } else {
    define_methods(name, fn);
  }
}

garnish.def = def;
