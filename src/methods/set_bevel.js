
def('set_bevel', function(radius){
  
  if(typeof radius == "number"){
    radius = radius + "px";
  }
  
  if(this.is_style('borderRadius')){
    this.set_style('borderRadius', radius);
  } else if(this.is_style('MozBorderRadius')){
    this.set_style('MozBorderRadius', radius);
  } else if(this.is_style('WebkitBorderRadius')){
    this.set_style('WebkitBorderRadius', radius);
  }
  
  return this;
});

