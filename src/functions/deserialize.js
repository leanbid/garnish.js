
function deserialize(data){
  var out = [];
  var pairs = data.split(/&/);
  var counters = [];
  for(var i in pairs){
    var pair = pairs[i];
    var matches = pair.match(/([^=]+)=(.*)/);
    if(!matches){
      continue;
    }
    var current = out;
    var path = matches[1];
    var value = unescape(matches[2]);
    var path_stack = [];
    while(path != ''){
      var matches = path.match(/^([^\[]+|\[.*?\])(.*)$/);
      if(!matches){
        break;
      }
      
      var key = unescape(matches[1].replace(/^\[(.*)\]$/, "$1"));
      if(key == ''){
        var path_stack_serialized = serialize(path_stack);
        if(!is_defined(counters[path_stack_serialized])){
          counters[path_stack_serialized] = 0;
        }
        key = counters[path_stack_serialized];
        counters[path_stack_serialized]++;
      }
      path_stack.push(key);
      
      path = matches[2];
      if(path == ''){
        current[key] = value;
      } else {
        if(!current[key]){
          current[key] = [];
        }
        current = current[key];
      }
    }
  }
  return out;
}
  
  
