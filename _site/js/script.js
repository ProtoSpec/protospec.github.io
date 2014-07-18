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

			var blogGeneralDescription = $('<span/>', {
				id: 'blog-general-description',
				html: 'What do you want to read about?'
			});

			var blogOptions = $('<div/>', {
				id: 'blog-options'
			});

			var option1 = $('<span/>', {
				id: 'tech-blog',
				class: 'blog-options-link',
				html: 'Technology'
			});

			var option2 = $('<span/>', {
				id: 'thoughts-blog',
				class: 'blog-options-link',
				html: 'General Thoughts'
			});

			blogOptions.append(option1);
			blogOptions.append(option2);

			blogDiv.append(blogTitle);
			blogDiv.append(blogGeneralDescription);
			blogDiv.append(blogOptions);

			blogDiv.insertAfter($('#content'));

			blogShowing = true;

			$('.blog-options-link').click(function() {
				console.log('show' + $(this).attr('id'));
			});
		}

		$('html, body').animate({
			scrollTop: $('#blog').offset().top
		}, 750);
	});
});