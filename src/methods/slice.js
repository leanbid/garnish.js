
ElementWrapperArray.prototype['slice'] = function(){
  var args = map_args(arguments, {from: 0, to: this.length}, [
    [['number'], ['from']],
    [['number', 'number'], ['from', 'to']]
  ]);
  
  var out = new ElementWrapperArray();
  
  for(var i = args.from; i < args.to; i++){
    out.push(this[i]);
  }
  
  return out;
};
