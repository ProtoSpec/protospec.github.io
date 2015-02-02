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

// ------------------------------------ Blog scripts ---------------------------------

/*

Blog structure:

Blog
\_ Topic (i.e. Ramblings, Tech, Snippets)
    \_ Post ('What I love about Programming', etc.)

*/

var blog = {};
function BlogState() {
    this.possibleTransitions = [];

    this.possibleTransitions.push({
        transition: function() {

        },
        destination: null
    });
}

blog.handle = function(subRoute) {
    console.log(subRoute);
}

function handleHashChange() {
    var newHash = location.hash;

    newHash = newHash.replace(/^#/, '');

    var hashParts = newHash.split('/');

    if (hashParts[0] == 'blog') {
        blog.handle(hashParts.slice(1).join('/'));
    }
}

// ------------------------------------ Other scripts --------------------------------

function initializeMainPage() {
    window.onhashchange = handleHashChange;

    if (location.hash) handleHashChange();

    blog.state = null;
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