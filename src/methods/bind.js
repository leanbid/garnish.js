
def('bind', function(name, fn){
  this.each(function(){
    var that = this;
    
    function fn_wrapper(){
      fn.apply(that, arguments);
    }
    
    if(is_defined(this.element_list[0].addEventListener)){
      this.element_list[0].addEventListener(name, fn_wrapper, false);
    } else if(is_defined(this.element_list[0].attachEvent)){
      this.element_list[0].attachEvent("on" + name, fn_wrapper);
    }
  });
  
  return this;
});

