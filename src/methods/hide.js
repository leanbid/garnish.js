
def('hide', function(fn){
  if(!is_defined(this._is_hidden)){
    this._is_hidden = false;
    this._display = this.style('display');
  }
  this._is_hidden = true;
  this.set_style('display', 'none');
  return this;
});

