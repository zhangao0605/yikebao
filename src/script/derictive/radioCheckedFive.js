app.directive('radioCheckedFive', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parents('.switch-list').find('span').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});
