
def('set_attribute', function(name, value){
  this.each(function(){
    if(name == 'style' && is_defined(this.element.style.setAttribute)){
      this.element.style.setAttribute('cssText', value);
    } else {
      this.element.setAttribute(name, value);
    }
  });
  return this;
});
