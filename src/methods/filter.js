
def('filter', function(condition){
  var out = [];
  this.each(function(){
    if(this.is(condition)){
      out.push(this.element_list[0]);
    }
  });
  return wrap(out);
});

