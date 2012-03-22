
def('metrics', function(){
  var x = 0;
  var y = 0;
  var current_el = this.element_list[0];
  while(is_defined(current_el)){
    x += current_el.offsetLeft;
    y += current_el.offsetTop;
    current_el = current_el.offsetParent;
  }
  var width = this.element_list[0].offsetWidth;
  var height = this.element_list[0].offsetHeight;
  return {
    x: x,
    y: y,
    width: width,
    height: height	
  }
});
