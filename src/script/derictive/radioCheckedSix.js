app.directive('radioCheckedSix', function () {
    return {
        link: function (scope, elem) {
            if (elem.prop('checked')) {
                elem.parent().addClass('on');
            }
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parents('.page6-third-li').find('div').removeClass('on');
                    elem.parent().addClass('on');
                }
            });
        }
    }
});
