
def('close_dialog', function(){
  var args = map_args(arguments, {index: 0, after_click: null}, [
    [['number'], ['index']],
    [['boolean'], ['after_click']],
    [['number', 'boolean'], ['number', 'index']]
  ]);

  if(!is_defined(args.after_click)){
    if((this.is_type('span') || this.is_type('div')) && this.content() == ''){
      args.after_click = false;
    } else {
      args.after_click = true;
    }
  }
  
  if(args.after_click){
    this.click(function(){
      this.dialog(args.index).close();
    });
  } else {
    this.dialog(args.index).close();
  }

  return this;
});

