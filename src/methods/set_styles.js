
def('set_styles', function(styles){
  for(var i in styles){
    this.set_style(i, styles[i]);
  }
  return this;
});
