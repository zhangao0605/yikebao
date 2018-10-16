app.directive('radioChecked', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parents('.page13-floor-classify').find('.page13-classify-radio').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});
