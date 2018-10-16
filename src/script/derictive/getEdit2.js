app.directive('getEdit2', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                elem.hide();
                elem.prev().show();
                elem.parent().parent().find('input').removeClass('on').removeAttr('readonly');
            });
        }
    }
});
