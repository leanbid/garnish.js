
def('ancestors', function(){
  var args = map_args(arguments, {filter: "true", include_this: false}, [
    [['string'], ['filter']],
    [['boolean'], ['include_this']],
    [['string', 'boolean'], ['filter', 'include_this']]
  ]);
  
  var out = [];
  
  var current;
  if(args.include_this){
    current = this;
  } else {
    current = this.parent();
  }
  
  while(current.element_list[0] != document){
    if(current.is(args.filter)){
      out.push(current.element_list[0]);
    }
    current = current.parent();
  }
  
  return wrap(out);
});

