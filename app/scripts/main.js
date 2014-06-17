etsyitems.results.forEach(function(a){
	$('.item').append('$' + a.price + a.title);
});