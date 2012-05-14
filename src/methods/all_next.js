
def('all_next', function(){
  var args = map_args(arguments, {filter: "true"}, [
    [['string'], ['filter']]
  ]);

  return this.parent().children().slice(this.index() + 1).filter(args.filter);
});
