
function wrap(arg1){
  if(!is_defined(arg1)){
    return new ElementListWrapper([]);
  }
  if(arg1 instanceof Array){
    return new ElementListWrapper(arg1);
  }
  return new ElementListWrapper([arg1]);
}

garnish.wrap = wrap
