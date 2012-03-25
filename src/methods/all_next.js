
def('all_next', function(){
  var args = map_args(arguments, {filter: "true"}, [
    [['string'], ['filter']]
  ]);

  this.parent().children().slice(this.index() + 1).filter(args.filter);
});
