
def('children', function(){
  var args = map_args(arguments, {filter: "true"}, [
    [['string'], ['filter']]
  ]);
  
  var out = [];
  
  for(var i = 0; i < el.childNodes.length; i++){
    if(is_defined(el.childNodes[i].attributes) && new ElementWrapper(el.childNodes[i]).is(args.filter)){
     out.push(el);
    }
  }
  
  return new ElementListWrapper(out);
});

