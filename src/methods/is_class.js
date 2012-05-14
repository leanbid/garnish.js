
def('is_class', function(name){
  name = name.toLowerCase(name);
  var class_name_list = this.attribute("class", "").toLowerCase().replace(/^\s*/, "").replace(/\s*$/, "").split(/\s+/);
  for(var i in class_name_list){
    if(class_name_list[i] == name){
      return true;
    }
  }
  return false;
});

