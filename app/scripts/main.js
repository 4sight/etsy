var newItem = $('<div class="item"></div>');
etsyitems.results.forEach(function(a){
	$('body').append(
		'<div class="item"><img src="' + a.Images[0].url_570xN + '">' + a.title + '$' + a.price + a.currency_code + '</div>'
		);
});