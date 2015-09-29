$(document).ready(function() {
	$('button').on('click', function() {
		$.ajax({
			url: 'test.txt', 
			type: 'POST',
  			dataType: 'html',
			success: function(result) {
				$('.title').html(result);
			}
		});
	});

	$.ajax({
		url: 'pages/products.html',
		type: 'GET',
		dataType: 'html',
		success: function(result) {
			$('.main-content').html(result);
		}
	});
});