
add_initializer(function(){
  if(!this.is_type('form')){
    return;
  }
  
  var aframe = this.aframe();
  if(!is_defined(aframe)){
    return;
  }
  
  if(!this.is_attribute('action')){
    this.set_attribute('action', aframe.url());
  }
  
  var is_file_input = this.descendants("this.is_type('input') && this.attribute('type') == 'file'").length > 0;
  
  if(is_file_input){
    this.set_attribute('method', 'post');
    this.set_attribute('enctype', 'multipart/form-data');
    this.set_property('encoding', 'multipart/form-data');
    this.set_property('target', aframe.target_iframe());
  } else {
    this.set_property('onsubmit', function(){return false;});
    this.bind('submit', function(){
      aframe.post(this.attribute('action'), this.values());
    });
  }
  
});
