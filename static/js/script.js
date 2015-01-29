var CURRENT_ROUTE = window.location.pathname;

if (CURRENT_ROUTE.match('portfolio')) {
    $(function() {
        $('#project-list li').click(function() {
            var targetId = $(this).attr('id');
            var newId = '#' + targetId + '-info';
            $('#project-info > div').hide();

            var $newDiv = $(newId);

            $newDiv.show().parent('#project-info').height($newDiv.height());
        });
    });
}