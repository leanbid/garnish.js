
define_element_list_wrapper_method('ancestors', function(){
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
  
  while(current.element != document){
    if(current.is(args.filter)){
      out.push(current.element);
    }
    current = current.parent();
  }
  
  return new ElementListWrapper(out);
});

