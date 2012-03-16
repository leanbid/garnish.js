
def('index', function(){
  var out = 0;
  var that = this;
  this.parent().children().each(function(){
    if(this.element_list[0] == that.element_list[0]){
      brk();
    }
    out++;
  });
  return out;
});
