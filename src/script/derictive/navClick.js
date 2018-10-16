app.directive('navClick', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                elem.parent().parent().find('.nav-floor-ul').hide();
                elem.parent().parent().find('.line').hide();
                elem.parent().find('.nav-floor-ul').show();
                elem.parent().find('.line').show();
            });
        }
    }
});