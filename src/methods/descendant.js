
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
  
  var out = [];
  
  var index = 0;
  
  var that = this;
  var root = this.element_list[0];
  try {
    function traverse(el){
      if((args.include_this || el != root) && wrap(el).is(args.filter)){
        if(index == args.index){
          out.push(el);
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
  return wrap(out);
});

