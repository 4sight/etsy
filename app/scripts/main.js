var newItem = $('<div class="item"></div>');
etsyitems.results.forEach(function(a){
	$('body').append(newItem);
	newItem.html('$' + a.price + ' ' + a.title);
});