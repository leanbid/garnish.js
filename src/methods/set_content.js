
def('set_content', function(html){
  this.descendants().emit('clean_up');
  this.element.innerHTML = html;
  this.descendants().init();
  this.ancestors().emit('content_updated');
  return this;
});
