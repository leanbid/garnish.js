
def('filter', function(condition){
  var out = new ElementWrapperArray();
  this.each(function(){
    if(this.is(condition)){
      out.push(this);
    }
  });
  return out;
});

