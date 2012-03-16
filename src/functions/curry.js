

function curry(fn){
  var prefix_args = [];
  for(var i = 1; i < arguments.length; i++){
    prefix_args.push(arguments[i]);
  }
  return function(){
    var args = [];
    for(var i = 0; i < prefix_args.length; i++){
      args.push(prefix_args[i]);
    }
    for(var i = 0; i < arguments.length; i++){
      args.push(arguments[i]);
    }
    return fn.apply(this, args);
  };
}
