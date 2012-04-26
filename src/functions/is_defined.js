
function is_defined(value){
  if(value != null && (value || !isNaN(value))){
    return true;
  }
  return false;
}

garnish.is_defined = is_defined;
