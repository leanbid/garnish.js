
def('each', function(fn){
  try {
    for(var i in this.element_list){
      fn.call(wrap(this.element_list[i]));
    }
  } catch(e){
    if(e != brk){
      throw e;
    }
  }
  return this;
});

