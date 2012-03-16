
def('set_attribute', function(name, value){
  this.each(function(){
    if(name == 'style' && is_defined(this.element_list[0].style.setAttribute)){
      this.element_list[0].style.setAttribute('cssText', value);
    } else {
      this.element_list[0].setAttribute(name, value);
    }
  });
  return this;
});
