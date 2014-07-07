function centerElements(elementsToCenter) {
	// console.log('centering everything');

	var transitionTime;

	$.each(elementsToCenter, function() {
		// console.log('centering' + $(this).attr('id'));

		transitionTime = $(this).css('transition-duration');

		$(this).css('transition-duration', '0');
		$(this).css('margin-left', -$(this).width() / 2);
		$(this).css('margin-top', -$(this).height() / 2);
	});

	window.setTimeout(function() {
		$.each(elementsToCenter, function() {
			$(this).css('transition-duration', toString(transitionTime));
		})
	}, 500);
}

$(function() {
	var elementsToCenter = [
		$('#name'),
		$('#linkedin-link'),
		$('#resume-link'),
		$('#github-link'),
		$('#blog-link')
	];
	var blogShowing = false;

	centerElements(elementsToCenter);

	$('#blog-link').click(function(event) {
		event.preventDefault();

		if (!blogShowing) {
			var blogDiv = $('<div/>', {
				id: 'blog'
			});

			var blogTitle = $('<span/>', {
				id: 'blog-title',
				html: 'Welcome!'
			});

			blogDiv.append(blogTitle);

			blogDiv.insertAfter($('#content'));

			blogShowing = true;
		}

		$('html, body').animate({
			scrollTop: $('#blog').offset().top
		}, 750);
	});
});