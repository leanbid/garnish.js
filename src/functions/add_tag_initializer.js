

function add_tag_initializer(type, fn){
  add_initializer(function(){
    if(this.is_type(type)){
      fn.call(this)
    }
  });
}

garnish.add_tag_initializer = add_tag_initializer;
