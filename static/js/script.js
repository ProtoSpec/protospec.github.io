var CURRENT_ROUTE = window.location.pathname;

// ==================================== Portfolio scripts ============================

function initializePortfolio() {
    $('#project-list li').click(function() {
        var targetId = $(this).attr('id');
        var newId = '#' + targetId + '-info';
        $('#project-info > div').hide();

        var $newDiv = $(newId);

        $newDiv.show().parent('#project-info').height($newDiv.height());
    });
}

// ==================================== Main page scripts ============================

/*

Blog structure:

Blog
\_ Topic (i.e. Ramblings, Tech, Snippets)
    \_ Post ('What I love about Programming', etc.)

*/

var blog = {};

var blogContainerId = 'blog-container';
function initializeMainPage() {
    $(document).on('click', '.state-transition', function(evt) {
        var transitionId = $(this).data('state');

        if (transitionId in blog.state.transitions) {
            blog.state.transitions[transitionId](evt);
        }
    });

    var topics = new Firebase("https://personal-blog.firebaseio.com/");

    topics.on("value", function(data) {
        var topicsObj = data.val() ? data.val().topics : {};

        var topicLinksTemplate = blogTemplate({ topicsObj: topicsObj });

        var topicHtmls = {};
        for (var key in topicsObj) {
            topicHtmls[key] = topicTemplate({ topic: topicsObj[key] });
        }

        console.log(topicsObj);

        blog.structure = {
            states: {
                'first': {
                    transitions: {
                        'intro': function(evt) {
                            // console.log('yay');
                            var newDiv = $('<div>', {
                                html: topicLinksTemplate,
                                id: blogContainerId
                            });

                            newDiv.appendTo('#content');

                            $('html, body').animate({
                                scrollTop: newDiv.offset().top
                            }, 250);

                            blog.state = blog.structure.states.second;
                        }
                    }
                },
                'second': {
                    transitions: {
                        'intro': function(evt) {
                            $('html, body').animate({
                                scrollTop: $('#' + blogContainerId).offset().top
                            }, 250);
                        },
                        'topic': function(evt) {
                            var newDiv = $('<div>', {
                               html: topicHtmls[evt.target.id],
                               id: 'posts'
                            });

                            var topics = $('#topics-container');

                            topics.animate({
                                marginLeft: 0,
                                marginRight: 0
                            }, 500, function after() {
                                topics.css('float', 'left');
                                newDiv.appendTo($('#' + blogContainerId));
                            });

                            blog.state = blog.structure.states.third;
                        }
                    }
                },
                'third': {
                    transitions: {
                        'intro': function(evt) {
                            $('html, body').animate({
                                scrollTop: $('#' + blogContainerId).offset().top
                            }, 250);
                        },
                        'topic': function(evt) {
                            var newDiv = $('<div>', {
                                html: topicHtmls[evt.target.id],
                                id: 'posts'
                            });

                            $('#posts').replaceWith(newDiv);
                        }
                    }
                }
            }
        };

        // for 

        blog.state = blog.structure.states.first;

        // for (var topic in topicsObj) {
        //     blog.state.transitions[topic] = function() {
        //     };
        // }
    });
}

// ==================================== OnLoad scripts ===============================

$(function() {
    if (CURRENT_ROUTE.match('portfolio')) {
        initializePortfolio();
    }
    else if (CURRENT_ROUTE.match('/')) {
        initializeMainPage();
    }
});