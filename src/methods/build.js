
def('build', function(child_builder_fn){
  var buffer_el = document.createElement('span');
  new DomBuilder(buffer_el, child_builder_fn);
  while(buffer_el.childNodes.length > 0){
    var current_el = buffer_el.childNodes[0]
    this.element.appendChild(current_el);
    if(is_defined(current_el.attributes)){
      wrap(current_el).descendants(true).init();
    }
  }
  this.ancestors().emit('content_updated');
  return this;
});
