
def('filter', function(condition){
  var out = [];
  this.each(function(){
    if(this.is(condition)){
      out.push(this.element);
    }
  });
  return wrap(out);
});

