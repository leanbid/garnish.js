

(function(){
  var is_ready = false;

  function ready(){
    if(is_ready){
      return
    }
    garnish.document = wrap(document);
    garnish.document.descendants().init();
    is_ready = true;
  }


  if(document.addEventListener){
    document.addEventListener("DOMContentLoaded", ready, false);
  } else if (navigator.userAgent.match(/MSIE/i)){
    document.write('<script type="text/javascript" id="init_script" defer="defer" src="javascript:void(0)"><\/script>')
    document.getElementById("init_script").onreadystatechange = function(){
      if(this.readyState=="complete"){
        ready();
      }
    };
  } else if(navigator.userAgent.match(/Safari/i)){
    var interval = setInterval(function(){
      if(document.readyState == "loaded" || document.readyState == "complete"){
        clearInterval(interval);
        ready();
      }
    }, 1);
  }
})();
