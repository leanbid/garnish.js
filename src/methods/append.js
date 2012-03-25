
def('append', function(){
  var type = 'span';
  if(!is_defined(arguments[0])){
    type = arguments[0]
  }
  var element = document.createElement(type);
  this.element.appendChild(element);
  return wrap(element);
});

