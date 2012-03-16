

function add_class_initializer(name, fn){
  add_initializer(function(){
    if(this.is_class(name)){
      fn.call(this)
    }
  });
}


garnish.add_class_initializer = add_class_initializer;
