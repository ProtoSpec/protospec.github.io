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

Blog layers

Blog
\_ Topic (i.e. Ramblings, Tech, Snippets)
    \_ Post ('What I love about Programming', etc.)

*/

var blogContainerId = 'blog-container';
function scrollToBlog() {
    $('html, body').animate({
        scrollTop: $('#' + blogContainerId).offset().top
    }, 250);
}

var blog = {};

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
            console.log(topicHtmls[key]);
        }

        blog.layers = {
            'first': {
                transitions: {
                    'intro': function(evt) {
                        var newDiv = $('<div>', {
                            html: topicLinksTemplate,
                            id: blogContainerId
                        });

                        newDiv.appendTo('#content');

                        scrollToBlog();

                        blog.state = blog.layers.second;
                    }
                }
            },
            'second': {
                transitions: {
                    'intro': scrollToBlog,
                    'topic': function(evt) {
                        var newDiv = $('<div>', {
                           html: topicHtmls[evt.target.id],
                           id: 'posts'
                        });

                        var topics = $('#topics-container');

                        topics.animate({
                            marginLeft: 40,
                            marginRight: 40,
                            fontSize: 30,
                            borderRightColor: 'white',
                            borderRightWidth: 1,
                            width: 200
                        }, 350, function after() {
                            topics.css('float', 'left');
                            newDiv.appendTo($('#' + blogContainerId));
                        });

                        blog.state = blog.layers.third;
                    }
                }
            },
            'third': {
                transitions: {
                    'intro': scrollToBlog,
                    'topic': function(evt) {
                        var newDiv = $('<div>', {
                            html: topicHtmls[evt.target.id],
                            id: 'posts'
                        });

                        $('#posts').replaceWith(newDiv);
                    },
                    'post': function(evt) {
                        var $clicked = $(evt.target);

                        $clicked.siblings('.preview, .text').toggle();

                        blog.state = blog.layers.fourth;
                        blog.state.$showing = $clicked;
                    }
                }
            },
            'fourth': {
                transitions: {
                    'intro': scrollToBlog,
                    'topic': function(evt) {

                    },
                    'post': function(evt) {
                        var $clicked = $(evt.target);

                        $clicked.siblings('.preview, .text').toggle();

                        if (blog.state.$showing && ($clicked[0] == blog.state.$showing[0])) {
                            console.log('Going back to third');
                            blog.state = blog.layers.third;
                        }
                        else if (blog.state.$showing) {
                            blog.state.$showing.siblings('.preview, .text').toggle();
                            blog.state.$showing = $clicked;
                        }
                        else {
                            blog.state.$showing = $clicked;
                        }
                    }
                },
                $showing: null
            }
        };

        // for 

        blog.state = blog.layers.first;

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