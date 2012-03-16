
def('set_content', function(html){
  this.first().descendants().emit('clean_up');
  this.element_list[0].innerHTML = html;
  this.first().descendants().init();
  this.ancestors().emit('content_updated');
  return this;
});
