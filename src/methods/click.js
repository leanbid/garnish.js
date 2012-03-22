
def('click', function(fn){
  var args = map_args(arguments, {confirm_message: null, fn: function(){}}, [
    [['function'], ['fn']],
    [['string', 'function'], ['confirm_message', 'fn']]
  ]);
  
  this.each(function(){
    this.bind('click', function(){
      if(args.confirm_message == null || confirm(args.confirm_message)){
        args.fn.apply(this, arguments);
      }
    });
    
    if(this.is_type('a')){
      this.set_attribute('href', 'javascript:;');
    }
  });
  
  return this;
});

