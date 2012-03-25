
def('descendants', function(){
  var args = map_args(arguments, {filter: "true", include_this: false}, [
    [['string'], ['filter']],
    [['boolean'], ['include_this']],
    [['string', 'boolean'], ['filter', 'include_this']]
  ]);
  
  var out = new ElementWrapperArray();
  
  var that = this;
  var root = this.element;
  function traverse(el){
    if((args.include_this || el != root) && wrap(el).is(args.filter)){
      out.push(wrap(el));
    }
    for(var i = 0; i < el.childNodes.length; i++){
      if(is_defined(el.childNodes[i].attributes)){
        traverse(el.childNodes[i]);
      }
    }
  }
  traverse(root);
  return out;
});

