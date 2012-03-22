
def('bind', function(name, fn){
  this.each(function(){
    var that = this;
    
    function fn_wrapper(){
      fn.apply(that, arguments);
    }
    
    if(is_defined(this.element.addEventListener)){
      this.element.addEventListener(name, fn_wrapper, false);
    } else if(is_defined(this.element.attachEvent)){
      this.element.attachEvent("on" + name, fn_wrapper);
    }
  });
  
  return this;
});

