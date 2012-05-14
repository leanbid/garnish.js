
def('all_previous', function(){
  var args = map_args(arguments, {filter: "true"}, [
    [['string'], ['filter']]
  ]);

  return this.parent().children().slice(0, this.index()).filter(args.filter).reverse();
});
