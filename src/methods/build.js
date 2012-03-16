
(function(){
  
  function DomBuilder(el, child_builder_fn){
    
    this.text = function(text){
      el.appendChild(document.createTextNode(text));
    };
    
    this.tag = function(){
      var args = map_args(arguments, {type: 'div', attributes: {}, text: null, child_builder_fn: null}, [
        [['string'], ['type']],
        [['string', 'string'], ['type', 'text']],
        [['string', 'object'], ['type', 'attributes']],
        [['string', 'function'], ['type', 'child_builder_fn']],
        [['string', 'object', 'string'], ['type', 'attributes', 'text']],
        [['string', 'object', 'function'], ['type', 'attributes', 'child_builder_fn']]
      ]);
      
      var child_el = document.createElement(args.type);
      var wrapped_child_el = wrap(child_el);
      
      for(var i in args.attributes){
        if(typeof args.attributes[i] == 'string'){
          wrapped_child_el.set_attribute(i, args.attributes[i]); 
        } else {
          wrapped_child_el.set_property(i, args.attributes[i]); 
        }
      }
    
      if(args.text){
        new DomBuilder(child_el, function(){
          this.text(args.text);
        });
      }
      
      if(args.child_builder_fn){
        new DomBuilder(child_el, args.child_builder_fn);
      }
      
      el.appendChild(child_el);
      
    };
    
    for(var i in HTML_TAGS){
      this[HTML_TAGS[i]] = curry(this.tag, HTML_TAGS[i]);
    }
    
    child_builder_fn.call(this);
  };

  def('build', function(child_builder_fn){
    var buffer_el = document.createElement('span');
    new DomBuilder(buffer_el, child_builder_fn);
    while(buffer_el.childNodes.length > 0){
      var current_el = buffer_el.childNodes[0]
      this.element_list[0].appendChild(current_el);
      if(is_defined(current_el.attributes)){
        wrap(current_el).descendants(true).init();
      }
    }
    this.ancestors().emit('content_updated');
    return this;
  });


})();
