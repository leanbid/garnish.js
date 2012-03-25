
def('inputs', function(){
  if(!is_defined(this._inputs_cache)){
    var inputs_cache = [];
    this.descendants().each(function(){
      if((this.is_type('input') || this.is_type('select') || this.is_type('textarea')) && this.is_attribute('name')){
        inputs_cache.push(this);
      }
    });
    this._inputs_cache = inputs_cache;
  }
  
  this.listen('content_updated', function(){
    this._inputs_cache = null;
  });
  
  return this._inputs_cache;
});

