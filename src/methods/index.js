
def('index', function(){
  var out = 0;
  var that = this;
  this.parent().children().each(function(){
    if(this.element == that.element){
      brk();
    }
    out++;
  });
  return out;
});
