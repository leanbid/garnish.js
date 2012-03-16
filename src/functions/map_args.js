
function map_args(args, defaults, map){
  var out = defaults;
  
  var key = []
  for(var i in args){
    if(args[i] instanceof Array){
      key.push('array');
    } else if(args[i] instanceof Function){
      key.push('function');
    } else {
      key.push(typeof args[i]);
    }
  }
  key = key.join(',');
  
  for(var i in map){
    if(map[i][0].join(',') == key){
      for(var j in map[i][1]){
        out[map[i][1][j]] = args[j];
      }
      break;
    }
  }
  
  return out;
}


