
def('interval', function(){
   var args = map_args(arguments, {time: 1000, _this: null, fn: null}, [
    [['function'], ['fn']],
    [['number', 'function'], ['time', 'fn']],
    [['object', 'function'], ['_this', 'fn']],
    [['number', 'object', 'fn'], ['time', '_this', 'fn']]
  ]);
  var out = new Interval(args.time, args._this, args.fn);
  this.listen('clean_up', function(){
    out.stop();
  });
  return out;
});

