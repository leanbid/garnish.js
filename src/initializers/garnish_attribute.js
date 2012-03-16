
add_initializer(function(){
  if(this.is_property('garnish') && this.property('garnish') instanceof Function){
    this.property('garnish').call(this);
  } else if(this.is_attribute('garnish')){
    eval(this.attribute('garnish'));
  }
});
