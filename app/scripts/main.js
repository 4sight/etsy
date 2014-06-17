etsyitems.results.forEach(function(a){
	$('.products').append(
		'<div class="wrapper"><img src="' + a.Images[0].url_570xN + '" style="float: left;" height="200px" width ="250px"><div class="title">' + a.title + '$' + a.price + a.currency_code + '</div></div>'
		);
});