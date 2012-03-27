
(function(){
  
  function url(){
    return this._url;
  }
  
  function set_url(url){
    this._url = url;
  }
  
  function url_path(){
    return this._url.replace(/\?(.*)$/, "");
  }

  function url_vars(){
    return deserialize(this._url.replace(/^(.*)\?/, ""));
  }
  
  function set_url_vars(vars){
    this.set_url(this.url_path() + "?" + serialize(vars));
    return this;
  }

  function merge_url_vars(vars_to_merge){
    var vars = this.url_vars();
    for(var i in vars_to_merge){
      vars[i] = vars_to_merge[i];
    }
    this.set_url_vars(vars);
    return this;
  }
  
  function get(){
    var args = map_args(arguments, {url: this.url(), vars: {}, merge: true, fn: null}, [
      [['string'], ['url']],
      [['object'], ['vars']],
      [['object', 'boolean'], ['vars', 'merge']],
      [['string', 'object'], ['url', 'vars']],
      [['string', 'object', 'boolean'], ['url', 'vars', 'merge']],
      [['string', 'function'], ['url', 'fn']],
      [['object', 'function'], ['vars', 'fn']],
      [['object', 'boolean', 'function'], ['vars', 'merge', 'fn']],
      [['string', 'object', 'function'], ['url', 'vars', 'fn']],
      [['string', 'object', 'boolean', 'function'], ['url', 'vars', 'merge', 'fn']]
    ]);
    
    this.set_url(args.url);
    
    if(args.merge){
      this.merge_url_vars(args.vars);
    } else {
      this.set_url_vars(args.vars);
    }
    
    var that = this;
    this._xhr.send('get', this.url(), {}, function(data){
      if(is_defined(args.fn)){
        data = args.fn.call(that, data);
      }
      if(is_defined(data)){
        that.set_content(data);
      }
    });
  }
  
  function _delete(){
    var args = map_args(arguments, {url: this.url(), vars: {}, merge: true, fn: null}, [
      [['string'], ['url']],
      [['object'], ['vars']],
      [['object', 'boolean'], ['vars', 'merge']],
      [['string', 'object'], ['url', 'vars']],
      [['string', 'object', 'boolean'], ['url', 'vars', 'merge']],
      [['string', 'function'], ['url', 'fn']],
      [['object', 'function'], ['vars', 'fn']],
      [['object', 'boolean', 'function'], ['vars', 'merge', 'fn']],
      [['string', 'object', 'function'], ['url', 'vars', 'fn']],
      [['string', 'object', 'boolean', 'function'], ['url', 'vars', 'merge', 'fn']]
    ]);
    
    this.set_url(args.url);
    
    if(args.merge){
      this.merge_url_vars(args.vars);
    } else {
      this.set_url_vars(args.vars);
    }
    
    var that = this;
    this._xhr.send('delete', this.url(), {}, function(data){
      if(is_defined(args.fn)){
        data = args.fn.call(that, data);
      }
      if(is_defined(data)){
        that.set_content(data);
      }
    });
  }
  
  function post(){
    var args = map_args(arguments, {url: this.url(), vars: {}, fn: null}, [
      [['string'], ['url']],
      [['object'], ['vars']],
      [['string', 'object'], ['url', 'vars']],
      [['string', 'function'], ['url', 'fn']],
      [['object', 'function'], ['vars', 'fn']],
      [['string', 'object', 'function'], ['url', 'vars', 'fn']]
    ]);
    
    this.set_url(args.url);
    
    var that = this;
    this._xhr.send('post', this.url(), args.vars, function(data){
      if(is_defined(args.fn)){
        data = args.fn.call(that, data);
      }
      if(is_defined(data)){
        that.set_content(data);
      }
    });
  }
  
  function put(){
    var args = map_args(arguments, {url: this.url(), vars: {}, fn: null}, [
      [['string'], ['url']],
      [['object'], ['vars']],
      [['string', 'object'], ['url', 'vars']],
      [['string', 'function'], ['url', 'fn']],
      [['object', 'function'], ['vars', 'fn']],
      [['string', 'object', 'function'], ['url', 'vars', 'fn']]
    ]);
    
    
    this.set_url(args.url);
    
    var that = this;
    this._xhr.send('put', this.url(), args.vars, function(data){
      if(is_defined(args.fn)){
        data = args.fn.call(that, data);
      }
      if(is_defined(data)){
        that.set_content(data);
      }
    });
  }
  
  var counter = 0;
  
  function target_iframe(){
    if(!is_defined(this._target_iframe)){
      this._target_iframe = "iframe_" + counter;
      counter++;
      var iframe_container = this.append();
      iframe_container.set_style('display', 'none');
      iframe_container.set_content("<iframe name='"+ this._target_iframe +"' onload=\"if(this.parentNode.iframe_onload){this.parentNode.iframe_onload(this);}\"></iframe>");
      var that = this;
      iframe_container.element.iframe_onload = function(iframe){
        var html = iframe.contentDocument ? iframe.contentDocument.getElementsByTagName('body')[0].innerHTML : iframe.contentWindow.document.getElementsByTagName('body')[0].innerHTML;
        if(html != '' && is_defined(html)){
          setTimeout(function(){
            that.set_content(html); 
          }, 1);
        }
      };
    }
    return this._target_iframe;
  }
  
  def('init_aframe', function(){
    var args = map_args(arguments, {url: window.location.href, load: (this.is_type('span') || this.is_type('div')) && this.content() == ''}, [
      [['string'], ['url']],
      [['boolean'], ['load']],
      [['string', 'boolean'], ['url', 'load']]
    ]);
    
    this._is_aframe = true;
    
    this._xhr = this.xhr();
    this.def('url', url);
    this.def('set_url', set_url);
    this.def('url_path', url_path);
    this.def('url_vars', url_vars);
    this.def('set_url_vars', set_url_vars);
    this.def('merge_url_vars', merge_url_vars);
    this.def('get', get);
    this.def('_delete', _delete);
    this.def('post', post);
    this.def('put', put);
    this.def('target_iframe', target_iframe);
    
    this.set_url(args.url)

    if(args.load){
      this.get();
    }
    
    return this;
  });

})();

