
add_initializer(function(){
  if(!this.is_type('a')){
    return;
  }
  
  var href = this.attribute('href');
  if(!is_defined(href) || href.match(/^javascript:/)){
    return;
  }
  
  var aframe = this.aframe();
  if(!is_defined(aframe)){
    return;
  }

  this.click(function(){
    aframe.get(href);
  });
  
});
