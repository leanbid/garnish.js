
def('show', function(fn){
  if(!is_defined(this._is_hidden)){
    this._is_hidden = false;
    this._display = this.style('display');
  }
  this._is_hidden = false;
  this.set_style('display', this._display);
  return this;
});

