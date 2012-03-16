

(function(){
  function Xhr(){
    var xhr_list = [function(){return new XMLHttpRequest();}, function(){return new ActiveXObject("Msxml2.XMLHTTP");}, function(){return new ActiveXObject("Microsoft.XMLHTTP");}];
    var xhr;
    for(var i in xhr_list){
      var found = true;
      try {
        xhr = xhr_list[i]();
        break;
      } catch(e){
        //do nothing
      }
    }
    
    this.send = function(method, url, vars, fn){
      if(!xhr){
        return;
      }
      
      this.abort();
      
      var data = serialize(vars);
      xhr.open(method, url, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
      xhr.setRequestHeader("Content-length", data.length);
      xhr.setRequestHeader("Connection", "close");
      xhr.onreadystatechange = function(data){
        if(xhr.readyState == 4 && xhr.status == 200){
          fn.call(null, xhr.responseText);
        }
      };
      xhr.send(data);
    };
    
    this.abort = function(){
      if(xhr){
        xhr.abort();
      }
    }
  }
  
  def('xhr', function(){
    out = new Xhr();
    this.listen('clean_up', function(){
      out.abort();
    });
    return out;
  });

})();
