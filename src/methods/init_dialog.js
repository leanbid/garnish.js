
def('init_dialog', function(){
  var fn = arguments[0]
  var container;
  
  this.shared_vars().is_dialog = true;
  
  var protection_layer = body.append('span');
  protection_layer.set_styles({
    display: 'none',
    position: 'absolute',
    top: '0px',
    left: '0px',
    background: '#000'
  });
  protection_layer.opacity(0);
  
  var dialog = body.append('span');
  dialog.vars().parent = this;
  dialog.set_styles({
    display: 'none',
    position: 'absolute'
  });

  dialog.build(function(){
    this.table({style: "empty-cells: show;", cellpadding: "0", cellspacing: "0"}, function(){
      this.tag('tbody', function(){
        this.tr(function(){
          this.td({garnish: "this.opacity(30)", style: "height: 10px; width: 10px;"}, function(){
            this.span({garnish: "this.bevel('5px 0px 0px 0px')", style :"float:left; display: inline-block; height: 10px; width: 10px; background: #000;"});
          });
          this.td({garnish: "this.opacity(30)", style: "height: 10px; background: #000;"});
          this.td({garnish: "this.opacity(30)", style: "height: 10px; width: 10px;"}, function(){
            this.span({garnish: "this.bevel('0px 5px 0px 0px')", style :"float:left; display: inline-block; height: 10px; width: 10px; background: #000;"});
          });
        });
        this.tr(function(){
          this.td({garnish: "this.opacity(30)", style: "width: 10px; background: #000;"});
          this.td(function(){
            this.span({garnish: function(){container = this;}, style: "padding: 5px; background: #fff; display: inline-block;"});
          });
          this.td({garnish: "this.opacity(30)", style: "width: 10px; background: #000;"});
        });
        this.tr(function(){
          this.td({garnish: "this.opacity(30)", style: "height: 10px; width: 10px;"}, function(){
            this.span({garnish: "this.bevel('0px 0px 0px 5px')", style :"float:left; display: inline-block; height: 10px; width: 10px; background: #000;"});
          });
          this.td({garnish: "this.opacity(30)", style: "height: 10px; background: #000;"});
          this.td({garnish: "this.opacity(30)", style: "height: 10px; width: 10px;"}, function(){
            this.span({garnish: "this.bevel('0px 0px 5px 0px')", style :"float:left; display: inline-block; height: 10px; width: 10px; background: #000;"});
          });
        });
      });
    });
  });
  
  this.def('container', function(){
    return container;
  });
  
  this.def('open', function(){
    page_metrics = page_metrics();
    protection_layer.set_styles({
      width:  page_metrics.width + "px",
      height: page_metrics.height + "px",
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
    protection_layer.set_style('display', 'none');
    dialog.set_style('display', 'none');
  });
  
  this.def('reposition_left', function(){
    page_metrics = page_metrics();
    dialog_metrics = dialog.metrics();
    dialog_left = (page_metrics.width / 2) - (dialog_metrics.width / 2);
    dialog.set_style('left', dialog_left + "px");
  });
  
 this.def('reposition_top', function(){
    page_metrics = page_metrics();
    dialog_metrics = dialog.metrics();
    dialog_top = page_metrics.viewport_y + (page_metrics.viewport_height / 2) - (dialog_metrics.height / 2);
    if(dialog_top < page_metrics.viewport_y + 10){
      dialog_top = page_metrics.viewport_y + 10;
    }
    dialog.set_style('top', dialog_top + "px");
  });
  
  this.def('reposition', function(){
    this.reposition_left();
    this.reposition_top();
  });
  
  var init_content = false;
  this.listen('content_updated', function(){
    if(!init_content){
      this.reposition();
      init_content = true;
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

