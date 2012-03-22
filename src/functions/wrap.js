
function wrap(arg1){
  if(is_defined(arg1)){
    if(arg1 instanceof Array){
      return new ElementListWrapper(arg1);
    }
    return new ElementWrapper([arg1]);
  }
}

garnish.wrap = wrap
