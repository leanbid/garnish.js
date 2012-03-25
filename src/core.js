
function ElementWrapper(element){
  this.element = element;
  this.element.element_wrapper = this;
}

function ElementWrapperArray(){}
ElementWrapperArray.prototype = new Array();
