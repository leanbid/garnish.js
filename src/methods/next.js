
def('next', function(){
  var args = map_args(arguments, {filter: "true", fn: function(){}}, [
    [['string'], ['filter']],
    [['function'], ['fn']]
  ]);
  
  var siblings = this.parent().children();
  return siblings[this.index() + 1];
});
