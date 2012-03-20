

def('dialog', function(){
  var args = map_args(arguments, {index: 0}, [
    [['number'], ['index']]
  ]);
  return this.ancestor("this.is_dialog()", args.index);
});

