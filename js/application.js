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
});