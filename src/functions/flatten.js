

function flatten(data){
  var out = data;
  
  function count(o){
    var out = 0;
    for(var i in o){
      out++;
    }
    return out;
  }
  
  function first(o){
    for(var i in o){
      return o[i];
    }
  }
  
  while(typeof out == 'object' && count(out) == 1){
    out = first(out);
  }
  
  return out;
}

garnish.flatten = flatten;
