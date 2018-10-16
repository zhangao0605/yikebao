app.directive('groupAllCheckedFour', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parents('.page4-floor-one-list').find('span').addClass('on');
                } else {
                    elem.parents('.page4-floor-one-list').find('span').removeClass('on');
                }
            });
        }
    }
});
