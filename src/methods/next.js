
def('next', function(){
  var args = map_args(arguments, {filter: "true", index: 0}, [
    [['string'], ['filter']],
    [['number'], ['index']],
    [['string', 'number'], ['filter', 'index']]
  ]);
  return this.all_next(args.filter)[args.index];
});
