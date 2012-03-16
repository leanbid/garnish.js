
def('is_class', function(name){
  name = toLowerCase(name);
  var class_name_list = toLowerCase(this.property("class")).replace(/^\s*/, "").replace(/\s*$/, "").split(/\s+/);
  for(var i in class_name_list){
    if(class_name_list[i] == name){
      return true;
    }
  }
  return false;
});

