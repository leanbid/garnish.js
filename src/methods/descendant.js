
def('descendant', function(){
  var args = map_args(arguments, {filter: "true", index: 0, include_this: false}, [
    [['string'], ['filter']],
    [['number'], ['index']],
    [['boolean'], ['include_this']],
    [['string', 'number'], ['filter', 'index']],
    [['number', 'boolean'], ['index', 'include_this']],
    [['string', 'boolean'], ['filter', 'include_this']],
    [['string', 'number', 'boolean'], ['filter', 'index', 'include_this']]
  ]);
  
  var out;
  
  var index = 0;
  
  var that = this;
  var root = this.element;
  try {
    function traverse(el){
      var wrapped_el = wrap(el);
      if((args.include_this || el != root) && wrapped_el.is(args.filter)){
        if(index == args.index){
          out = wrapped_el;
          brk();
        }
        index++;
      }
      for(var i = 0; i < el.childNodes.length; i++){
        if(is_defined(el.childNodes[i].attributes)){
          traverse(el.childNodes[i]);
        }
      }
    }
    traverse(root);
  } catch(e){
    if(e != brk){
      throw e;
    }
  }
  return out;
});

