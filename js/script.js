$(function() {
	$('#project-list li').click(function() {
		var targetId = $(this).attr('id');
		var newId = '#' + targetId + '-info';
		$('#project-info > div').fadeOut(100);

		var $newDiv = $(newId);

		$newDiv.fadeIn(100)
			.parent('#project-info').height($newDiv.height());
	});
});