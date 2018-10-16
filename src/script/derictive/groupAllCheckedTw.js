app.directive('groupAllCheckedTw', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                    elem.parents('.page12-floor-two-list').find('.page12-div-checkbox').addClass('on').find('input').prop('checked', 'checked');
                } else {
                    elem.parent().removeClass('on');
                    elem.parents('.page12-floor-two-list').find('.page12-div-checkbox').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
});
