

function page_metrics(){
  var is_defined = is_defined;
  
  if(document.body.scrollHeight > document.body.offsetHeight){ 
    width = document.body.scrollWidth;
    height = document.body.scrollHeight;
  } else { 
    width = document.body.offsetWidth;
    height = document.body.offsetHeight;
  } 
  
  
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
    //document.documentel.scrollTop?
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
