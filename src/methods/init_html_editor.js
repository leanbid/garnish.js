
def('init_html_editor', function(){
  
  this.set_property('contentEditable', 'true');
  
  def('bold', function(){
    this.element.focus();
    document.execCommand("bold", false, null);
  });
  
  def('italic', function(){
    this.element.focus();
    document.execCommand("bold", false, null);
  });
  
  def('insert_html', function(html){
    this.element.focus();
    document.execCommand("inserthtml", false, html);
    this.descendants().init();
  });
  
  return this;
});

