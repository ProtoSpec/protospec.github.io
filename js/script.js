var blog = {
	blogShowing: false,
	blogEntryShowing: false,

	display: function() {
		if (!this.blogShowing) {
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

			var blogOptions = $('<ul/>', {
				id: 'blog-options'
			});

			topicsRef.on('child_added', function(snapshot) {
				jsonObject = snapshot.val();

				var newTopicLink = $('<li/>', {
					id: snapshot.name(),
					class: 'blog-topic-link',
					html: jsonObject['display-name']
				});

				newTopicLink.click(topicLinkClickCallback);
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
	}
}


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

function displayPost() {

	// $('.blog-topic-link').css('float', 'left');

	var blogTextExists = $('#blog-text').length != 0;

	if (!blogTextExists) {
		var blogText = $('<div/>', {
			id: 'blog-text'
		});

		$('#blog').append(blogText);
	}
	else {
		$('#blog-text').empty();
	}

	var loadingImage = $('<img/>', {
		id: 'blog-loading-gif',
		src: 'images/loading.gif'
	});

	blogText.append(loadingImage);


	postsRef.on('child_added', function(snapshot) {
		console.dir(snapshot.val());
	});

}

function topicLinkClickCallback(clickEvent) {
	// NOTE: "this" refers to the topic link clicked
	displayTopicLinkPosts($(this), this.id);
}

function displayTopicLinkPosts(containerListItem, topicID) {
	console.log('Getting posts for ' + topicID);
	var postsRef = new Firebase('https://personal-blog.firebaseIO.com/topics/' + topicID + '/posts/');

	var subList = $('<ul/>', { class: 'blog-topic-post-list' });

	containerListItem.append(subList);

	postsRef.on('child_added', function(snapshot) {
		console.log('Adding post to ' + topicID);
		var jsonObject = snapshot.val();

		var newPost = $('<li/>', {
			id: snapshot.name(),
			class: 'snapshot-topic-post-link',
			html: jsonObject['title']
		});

		subList.append(newPost);
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

	centerElements(elementsToCenter);

	$('#blog-link').click(function(event) {
		event.preventDefault();
		blog.display();
	});
});