
def('init_aframe_dialog', function(){
  var args = map_args(arguments, {url: null, after_click: null}, [
    [['string'], ['url']],
    [['boolean'], ['after_click']],
    [['string', 'boolean'], ['url', 'after_click']]
  ]);

  if(!is_defined(args.after_click)){
    if((this.is_type('span') || this.is_type('div')) && this.content() == ''){
      args.after_click = false;
    } else {
      args.after_click = true;
    }
  }
  
  this.init_dialog();
  this.container().init_aframe(args.url, false);
  
  if(args.after_click){
    this.click(function(){
      this.container().get();
      this.open();
    });
  } else {
    this.container().get();
    this.open();
  }

  return this;
});
