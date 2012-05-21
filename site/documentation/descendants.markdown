---
layout: default
title: .descendants()
---

# .descendants()

##description

Returns a list of all the descendant elements of an element.


##Arguments

{% highlight javascript %}
this.descendants()
this.descendants(selector_string)
{% endhighlight %}

##Example Usage

{% highlight javascript %}
//step through all the descendants
this.descendants().each(function(){
  //do something with 'this' (i.e. the current descendant)
});

//step through all the descendants who have a 'name' attribute
this.descendants("this.is_attribute('name')").each(function(){
  //do something with 'this' (i.e. the current descendant)
});

//count the number of text input elements
this.descendants("this.is_type('input') && this.attribute('attribute') == 'text'").length

{% endhighlight %}
