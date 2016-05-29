$(document).ready(function() {
	$.ajax({
		url: 'pages/products.html',
		type: 'GET',
		dataType: 'html',
		success: function(result) {
			$('.main-content').html(result);
		}
	});
});