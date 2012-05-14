
var width_el;

function page_metrics(){
  
  if(!is_defined(width_el)){
    width_el = garnish.document.descendant("this.is_type('body')").append('div');
    width_el.set_styles({
      position: 'absolute',
      top: '-1px',
      left: '0px',
      margin: '0px;',
      width: '100%',
      height: '1px'
    });
  }
  
  var width = width_el.metrics().width;
  
  //http://www.w3schools.com/jsref/dom_obj_all.asp
  
  var height = Math.max(
      Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
      Math.max(document.body.offsetHeight, document.documentElement.offsetHeight),
      Math.max(document.body.clientHeight, document.documentElement.clientHeight)
  );
  

  var viewport_x = 0;
  if(is_defined(window.pageXOffset)){
    viewport_x = window.pageXOffset;
  } else if(is_defined(document.documentElement.scrollLeft)){
    viewport_x = document.documentElement.scrollLeft;
  } else {
    viewport_x = document.body.scrollLeft
  }
  
  var viewport_y = 0;
  if(is_defined(window.pageYOffset)){
    viewport_y = window.pageYOffset;
  } else if(is_defined(document.documentElement.scrollTop)){
    viewport_y = document.documentElement.scrollTop;
  } else {
    viewport_y = document.body.scrollTop
  }

  
  var viewport_width = 0;
  if(is_defined(document.documentElement) && document.documentElement.clientWidth){
    viewport_width = document.documentElement.clientWidth;
  }
  if(is_defined(window.innerWidth) && window.innerWidth < viewport_width){
    viewport_width = window.innerWidth
  }
  
  var viewport_height = 0;
  if(is_defined(document.documentElement) && document.documentElement.clientHeight){
    viewport_height = document.documentElement.clientHeight;
  }
  if(is_defined(window.innerHeight) && window.innerHeight < viewport_height){
    viewport_height = window.innerHeight
  }
  
  

  if(width < viewport_width){
    width = viewport_width;
  }
  
  if(height < viewport_height){
    height = viewport_height;
  }
  
  return {
    width: width,
    height: height,
    viewport_x: viewport_x,
    viewport_y: viewport_y,
    viewport_width: viewport_width,
    viewport_height: viewport_height
  };
}

garnish.page_metrics = page_metrics;
