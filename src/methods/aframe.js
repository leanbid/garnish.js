

def('aframe', function(){
  var args = map_args(arguments, {index: 0}, [
    [['number'], ['index']]
  ]);
  return this.ancestor("this.is_aframe()", args.index);
});

