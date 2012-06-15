
def('value', function(){
  var value;
  if(this.is_type('input') && this.is_attribute('type') && this.is_attribute('value') && (this.attribute('type')  == 'checkbox' || this.attribute('type') == 'radio')){
    if(this.property('checked')){
      value = this.attribute('value');
    }
  } else {
    value = this.element.value;
  }
  return value;
});

