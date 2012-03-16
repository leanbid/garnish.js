
function serialize(o){
  var out = [];
  function serialize(path, data){
    if(typeof data != 'object'){
      out.push(path + "=" + encodeURIComponent(data));
      return;
    }
    for(var i in data){	
      if(path == ""){
        serialize(encodeURIComponent(i), data[i]);
      } else {
        serialize(path + "[" + encodeURIComponent(i) + "]", data[i]);
      }
    }
  }
  serialize("", o);
  return out.join('&');
}
