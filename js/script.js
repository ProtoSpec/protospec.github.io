$(function() {
	var elementsToCenter = [
		$('#name'),
		$('#linkedin'),
		$('#resume'),
		$('#github'),
		$('#blog')
	];

	var transitionTime;

	$.each(elementsToCenter, function() {
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
});