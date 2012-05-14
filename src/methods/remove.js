
def('remove', function(){
  this.emit('clean_up');
  this.descendants().emit('clean_up');
  this.ancestors().emit('content_updated');
  this.element.parentNode.removeChild(this.element);
});

