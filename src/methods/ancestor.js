
def('ancestor', function(){
  var args = map_args(arguments, {filter: "true", index: 0, include_this: false}, [
    [['string'], ['filter']],
    [['number'], ['index']],
    [['boolean'], ['include_this']],
    [['string', 'number'], ['filter', 'index']],
    [['number', 'boolean'], ['index', 'include_this']],
    [['string', 'boolean'], ['filter', 'include_this']],
    [['string', 'number', 'boolean'], ['filter', 'index', 'include_this']]
  ]);
  
  var current;
  if(args.include_this){
    current = this;
  } else {
    current = this.parent();
  }
  
  var out;
  var index = 0;
  
  while(current.element != document){
    if(current.is(args.filter)){
      if(index == args.index){
        out = current;
        break;
      }
      index++;
    }
    current = current.parent();
  }
  
  return out;
});

