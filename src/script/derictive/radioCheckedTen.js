app.directive('radioCheckedTen', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parents('.page10-one-list').find('.page10-one-radio').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});
