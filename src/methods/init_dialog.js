
def('init_dialog', function(){
  var fn = arguments[0]
  var container;
  
  this._is_dialog = true;
  
  var protection_layer = garnish.document.descendant("this.is_type('body')").append('span');
  protection_layer.set_styles({
    display: 'none',
    position: 'absolute',
    top: '0px',
    left: '0px',
    background: '#000'
  });
  protection_layer.set_opacity(20);
  
  var window_observer = this.interval(100, function(){
    var pm = page_metrics();
    protection_layer.set_styles({
      width:  pm.width + "px",
      height: pm.height + "px"
    });
  });
  
  
  var dialog = garnish.document.descendant("this.is_type('body')").append('span');
  dialog._parent = this;
  dialog.set_styles({
    display: 'none',
    position: 'absolute'
  });

  dialog.build(function(){
    this.table({style: "empty-cells: show;", cellpadding: "0", cellspacing: "0"}, function(){
      this.tag('tbody', function(){
        this.tr(function(){
          this.td({garnish: "this.set_opacity(30)", style: "height: 10px; width: 10px;"}, function(){
            this.span({garnish: "this.set_bevel('5px 0px 0px 0px')", style :"float:left; display: inline-block; height: 10px; width: 10px; background: #000;"});
          });
          this.td({garnish: "this.set_opacity(30)", style: "height: 10px; background: #000;"});
          this.td({garnish: "this.set_opacity(30)", style: "height: 10px; width: 10px;"}, function(){
            this.span({garnish: "this.set_bevel('0px 5px 0px 0px')", style :"float:left; display: inline-block; height: 10px; width: 10px; background: #000;"});
          });
        });
        this.tr(function(){
          this.td({garnish: "this.set_opacity(30)", style: "width: 10px; background: #000;"});
          this.td(function(){
            this.span({garnish: function(){container = this;}, style: "padding: 5px; background: #fff; display: inline-block;"});
          });
          this.td({garnish: "this.set_opacity(30)", style: "width: 10px; background: #000;"});
        });
        this.tr(function(){
          this.td({garnish: "this.set_opacity(30)", style: "height: 10px; width: 10px;"}, function(){
            this.span({garnish: "this.set_bevel('0px 0px 0px 5px')", style :"float:left; display: inline-block; height: 10px; width: 10px; background: #000;"});
          });
          this.td({garnish: "this.set_opacity(30)", style: "height: 10px; background: #000;"});
          this.td({garnish: "this.set_opacity(30)", style: "height: 10px; width: 10px;"}, function(){
            this.span({garnish: "this.set_bevel('0px 0px 5px 0px')", style :"float:left; display: inline-block; height: 10px; width: 10px; background: #000;"});
          });
        });
      });
    });
  });
  
  this.def('container', function(){
    return container;
  });
  
  this.def('open', function(){
    window_observer.start();
    protection_layer.set_styles({
      zIndex: top_zindex(),
      display: ''
    });
    
    dialog.fade_in();
    dialog.set_styles({
      zIndex: top_zindex(),
      display: ''
    });
    this.reposition();
    return this;
  });
  
  this.def('close', function(){
    window_observer.stop();
    protection_layer.set_style('display', 'none');
    dialog.set_style('display', 'none');
  });
  
  this.def('reposition_left', function(){
    var pm = page_metrics();
    var dialog_metrics = dialog.metrics();
    var dialog_left = (pm.width / 2) - (dialog_metrics.width / 2);
    dialog.set_style('left', dialog_left + "px");
  });
  
 this.def('reposition_top', function(){
    var pm = page_metrics();
    var dialog_metrics = dialog.metrics();
    var dialog_top = pm.viewport_y + (pm.viewport_height / 2) - (dialog_metrics.height / 2);
    if(dialog_top < pm.viewport_y + 10){
      dialog_top = pm.viewport_y + 10;
    }
    dialog.set_style('top', dialog_top + "px");
  });
  
  this.def('reposition', function(){
    this.reposition_left();
    this.reposition_top();
  });
  
  var active_xhr_counter = 0;
  this.listen('active_xhr', function(){ active_xhr_counter++; });
  this.listen('inactive_xhr', function(){ active_xhr_counter--; });

  var init_content = false;
  
  this.listen('content_updated', function(){
    if(!init_content){
      var interval = this.interval(10, function(){
        this.reposition();
        if(active_xhr_counter == 0){
          init_content = true;
          interval.stop();
        }
      }).start();
    } else {
      this.reposition_left();
    }
  });
  
  this.listen('clean_up', function(){
    protection_layer.remove();
    dialog.remove();
  });
  
  if(is_defined(fn)){
    fn.call(container);
  }
  
  return this;
});

