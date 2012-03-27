

(function(){
  function Xhr(){
    var args = map_args(arguments, {observer_fn: function(){}}, [
      [['function'], ['observer_fn']]
    ]);
    
    var active = false;
    
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
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            fn.call(null, xhr.responseText);
          }
          active = false;
          args.observer_fn.call(this, active);
        }
      };
      xhr.send(data);
      if(!active){
        active = true;
        args.observer_fn.call(this, active);
      }
    };
    
    this.abort = function(){
      if(xhr){
        xhr.abort();
        if(active){
          active = false;
          args.observer_fn.call(this, active);
        }
      }
    }
  }
  
  def('xhr', function(){
    var that = this;
    var out = new Xhr(function(active){
      if(active){
        that.ancestors().emit('active_xhr');
      } else {
        that.ancestors().emit('inactive_xhr');
      }
    });
    this.listen('clean_up', function(){
      out.abort();
    });
    return out;
  });

})();
