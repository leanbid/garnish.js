
def('values', function(){
  var out = {};
  var counters = [];
  var inputs = this.inputs();
  for(var i in inputs){
    var input = inputs[i];
    var name = input.attribute('name');
    var value = input.value();

    if(is_defined(value)){
      var current = out;
      var path = name;
      var path_stack = [];
      while(path != ''){
        var matches = path.match(/^([^\[]+|\[[^\]]*\])(.*)$/);
        if(!matches){
          break;
        }
        var key = matches[1].replace(/^\[(.*)\]$/, "$1");
        path = matches[2];
        
        if(key == ""){
          var path_stack_serialized = serialize(path_stack);
          if(!is_defined(counters[path_stack_serialized])){
            counters[path_stack_serialized] = 0;
          }
          key = counters[path_stack_serialized];
          counters[path_stack_serialized]++;
        }
        path_stack.push(key);
        if(path == ''){
          current[key] = value;
        } else {
          if(!is_defined(current[key])){
            current[key] = [];
          }
          current = current[key];
        }
        
      }
    }
  }
  
  return out;
});

