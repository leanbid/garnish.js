
def('poll_values', function(fn){

  var serialized_values = serialize(this.values());
  
  this.interval(100, function(){
    var values = this.values();
    var new_serialized_values = serialize(values);
    if(new_serialized_values != serialized_values){
      serialized_values = new_serialized_values;
      fn.call(this, values);
    }
  }).start();
  
});

