app.directive('radioCheckedFt', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parents('.page14-floor-one-list').find('span').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});
