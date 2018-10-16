app.directive('groupAllCheckedFive', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().removeClass('on');
                    elem.parents('.page5-floor-one-list').find('.page5-div-checkbox').removeClass('on').find('input').prop('checked', 'checked');
                } else {
                    elem.parent().addClass('on');
                    elem.parents('.page5-floor-one-list').find('.page5-div-checkbox').addClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
});
