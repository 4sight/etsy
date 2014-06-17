var newItem = $('<div class="item"></div>');
etsyitems.results.forEach(function(a){
	$('body').append(
		'<div class="item">$' + a.price + ' ' + a.title + '</div>'
		);
});