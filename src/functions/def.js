

function def(name, fn){
  var matches;
  if(matches = name.match(/^init_([\w_]+)$/)){
    var object_name = matches[1];
    ElementListWrapper.prototype[name] = function(){
      this.shared_vars()['is_' + object_name] = true;
      return fn.apply(this, arguments);
    };
    ElementListWrapper.prototype['is_' + object_name] = function(){
      return is_defined(this.shared_vars()['is_' + object_name]);
    };
  } else {
    ElementListWrapper.prototype[name] = fn;
  }
}

garnish.def = def;
