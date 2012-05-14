
def('children', function(){
  var args = map_args(arguments, {filter: "true"}, [
    [['string'], ['filter']]
  ]);
  
  var out = new ElementWrapperArray();
  
  for(var i = 0; i < this.element.childNodes.length; i++){
    if(is_defined(this.element.childNodes[i].attributes)){
      var wrapped_el = new wrap(this.element.childNodes[i]);
      if(wrapped_el.is(args.filter)){
        out.push(wrapped_el);
      }
    }
  }
  
  return out;
});

