
def('interval', function(){
   var args = map_args(arguments, {time: 1000, fn: null}, [
    [['function'], ['fn']],
    [['number', 'function'], ['time', 'fn']]
  ]);
  var out = new Interval(args.time, this, args.fn);
  this.listen('clean_up', function(){
    out.stop();
  });
  return out;
});

