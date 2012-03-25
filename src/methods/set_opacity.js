
def('set_opacity', function(opacity_percent){
  if(this.is_style('opacity')){
    this.set_style('opacity', opacity_percent / 100);
  } else if(this.is_style('filter')){
    this.set_style('filter', "alpha(opacity=" + opacity_percent + ")");
  } else if(this.is_style('MozOpacity')){
    this.set_style('MozOpacity', opacity_percent / 100);
  } else if(this.is_style('KhtmlOpacity')){
    this.set_style('KhtmlOpacity', opacity_percent / 100);
  } 
  return this;
});
