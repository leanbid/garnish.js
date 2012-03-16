
<div>
  State: <? echo isset($_GET['state']) ? $_GET['state'] : ''; ?>  
</div>

<input type="button" value="Foo" garnish="this.click(function(){this.ajax().get({state: 'foo'})})" />
<input type="button" value="Bar" garnish="this.click(function(){this.ajax().get({state: 'bar'})})" />


