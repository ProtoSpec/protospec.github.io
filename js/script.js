var blog = {
	blogShowing: false,
	blogEntryShowing: false,

	loadingImage: $('<img/>', {
		id: 'blog-loading-gif',
		src: '/images/loading.gif'
	}),

	createDisplayTopicsCallback: function(topicList) {
		var topicsRef = new Firebase('https://personal-blog.firebaseIO.com/topics/');

		console.log('Assigning callback for topics.');

		topicsRef.on('child_added', function(snapshot) {
			console.log('Adding ' + snapshot.name());
			dataJSON = snapshot.val();

			var newTopicLink = $('<li/>', {
				id: snapshot.name(),
				class: 'blog-topic-link',
				html: dataJSON['display-name']
			});

			newTopicLink.click(topicLinkClickCallback);
			topicList.append(newTopicLink);
		});
	},

	createTopicsList: function() {
		var blogTopicsList = $('<ul/>', {
			id: 'blog-options'
		});

		blogTopicsList.append(this.loadingGif);

		return blogTopicsList;
	},

	createBlogDiv: function() {
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

		blogDiv.append(blogTitle);
		blogDiv.append(blogGeneralDescription);
		blogDiv.append(this.createTopicsList());

		return blogDiv;
	},

	displayAfter: function(preceedingDiv) {
		if (!this.blogShowing) {
			var blogDiv = this.createBlogDiv();

			blogDiv.insertAfter(preceedingDiv);

			this.createDisplayTopicsCallback(blogDiv.find('#blog-options'));
		}

		$('html, body').animate({
			scrollTop: $('#blog').offset().top
		}, 500);

		blogShowing = true;
	}
}


function centerElements(elementsToCenter) {
	// console.log('centering everything');
	var transitionTime;

	var promise = Promise.resolve(
		$.each(elementsToCenter, function() {
			console.log('centering ' + $(this).attr('id'));

			console.log('outerWidth ' + $(this).outerWidth(true));

			$(this).css('margin-left', -$(this).width() / 2);
			$(this).css('margin-top', -$(this).height() / 2);
		})
	).catch(function(err) {
		console.error(err);
		throw err;
	});
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

$(window).load(function() {
	// var elementsToCenter = [
	// 	$('#name'),
	// 	// $('#linkedin-link'),
	// 	// $('#resume-link'),
	// 	// $('#github-link'),
	// 	// $('#portfolio-link'),
	// 	// $('#blog-link')
	// 	$('#links')
	// ];

	// centerElements(elementsToCenter);
});

$(function() {
	$('#blog-link').click(function(event) {
		event.preventDefault();
		blog.displayAfter($('#content'));
	});
});