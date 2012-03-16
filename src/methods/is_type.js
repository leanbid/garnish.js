
def('is_type', function(name){
  if(is_defined(name) && this.type() != name.toLowerCase()){
    return false;
  }
  return true;
});

