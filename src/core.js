
function ElementWrapper(element){
  this.element = element;
  this.element.element_wrapper = this;
}

function ElementWrapperArray(){}
ElementWrapperArray.prototype = new Array();


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
    var wrapped_child_el = new ElementWrapper(child_el);
    
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
}


function Interval(time, _this, fn){
  var interval;
  this.start = function(){
    interval = window.setInterval(function(){
      fn.call(_this);
    }, time);
    return this;
  };
  
  this.stop = function(){
    if(is_defined(interval)){
      window.clearInterval(interval);
      interval = null;
    }
    return this;
  }
}








