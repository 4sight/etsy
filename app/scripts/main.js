etsyitems.results.forEach(function(a){
	$('.products').append(
		'<div class="wrapper"><img src="' + a.Images[0].url_570xN + '" style="float: left;" height="200px" width ="250px"><div class="title">' + a.title + '$' + a.price + a.currency_code + '</div><div class="category">' + a.category_path[0] + '</div><div class="price">' + a.price + ' USD</div></div>'
		);
});