
def('remove', function(){
  this.each(function(){
    this.emit('clean_up');
    this.descendants().each(function(){
      this.emit('clean_up');
    });
    this.ancestors(function(){
      this.emit('content_updated');
    });
    this.element.parentNode.removeChild(this.element);
  });
});

