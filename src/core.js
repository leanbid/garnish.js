

function ElementWrapper(element){
  this.element = element;
  var shared_vars = this.shared_vars();
  if(is_defined(shared_vars.methods)){
    for(var i in shared_vars.methods){
      this[i] = shared_vars.methods[i];
    }
  }
}

function ElementListWrapper(element_list){
  this.element_list = element_list;
}
