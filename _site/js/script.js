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

function displayTopicPosts(listContainer) {
	console.log('Getting posts for ' + this.id);
	var postsRef = new Firebase('https://personal-blog.firebaseIO.com/topics/' + this.id + '/posts/');

	// $('.blog-options-link').css('float', 'left');

	var blogText = $('<div/>', {
		id: 'blog-text'
	});

	var loadingImage = $('<img/>', {
		id: 'blog-loading-gif',
		src: 'images/loading.gif'
	});

	blogText.empty();
	blogText.append(loadingImage);

	$('#blog').append(blogText);

	postsRef.on('child_added', function(snapshot) {
		console.dir(snapshot.val());
	});
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
	var blogEntryShowing = false;

	centerElements(elementsToCenter);

	$('#blog-link').click(function(event) {
		event.preventDefault();

		if (!blogShowing) {
			var topicsRef = new Firebase('https://personal-blog.firebaseIO.com/topics/');

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

			var options = [];

			topicsRef.on('child_added', function(snapshot) {
				jsonObject = snapshot.val();

				var newTopicLink = $('<span/>', {
					id: snapshot.name(),
					class: 'blog-options-link',
					html: jsonObject['display-name']
				});

				newTopicLink.click(displayTopicPosts);
				blogOptions.append(newTopicLink);
			});

			blogDiv.append(blogTitle);
			blogDiv.append(blogGeneralDescription);
			blogDiv.append(blogOptions);

			blogDiv.insertAfter($('#content'));

			blogShowing = true;
		}

		$('html, body').animate({
			scrollTop: $('#blog').offset().top
		}, 500);
	});
});