
def('fade_in', function(){
  var milliseconds = arguments[0];
  if(!is_defined(milliseconds)){
    milliseconds = 1000;
  }
  var start_time = (new Date()).getTime();
  this.set_opacity(0);
  var that = this;
  var interval = setInterval(function(){
    var time_elapsed = (new Date()).getTime() - start_time;
    opacity = (time_elapsed / milliseconds) * 100;
    if(opacity > 100){
      opacity = 100;
    }
    that.set_opacity(opacity);
    if(opacity == 100){
      clearInterval(interval);
    }
  }, 10);
  return this;
});

