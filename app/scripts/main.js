etsyitems.results.forEach(function(a){
	$('.products').append(
		'<div class="pic"><img src="' + a.Images[0].url_570xN + '" style="float: left;" height="200px" width ="250px"><div class="info">' + a.title + '$' + a.price + a.currency_code + '</div></div>'
		);
});