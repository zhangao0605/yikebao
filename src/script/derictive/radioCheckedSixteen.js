app.directive('radioCheckedSixteen', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parents('.page16-third-li').find('div').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});
