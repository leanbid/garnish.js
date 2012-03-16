
function is_defined(value){
  if(value != null && (value || !isNaN(value))){
    return true;
  }
  return false;
}
