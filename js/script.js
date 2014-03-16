$(function() {
	var elementsToCenter = [
		$('#name'),
		$('#linkedin'),
		$('#resume'),
		$('#github')
	];

	$.each(elementsToCenter, function() {
		$(this).css('margin-left', -1 * $(this).width() / 2);
		$(this).css('margin-top', -1 * $(this).height() / 2);
	});
});