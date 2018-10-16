app.directive('groupCheckedTw', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                    var checkArr = elem.parents('.page11-floor-two-list').find('.page11-div-checkbox');
                    for (var k = 0, flag = true; k < checkArr.length; k++) {
                        if (!checkArr.eq(k).find('input').prop('checked')) {
                            flag = false;
                        }
                    }
                    if (flag) {
                        elem.parents('.page11-floor-two-list').find('.page11-checkAll-div').addClass('on').find('input').prop('checked', 'checked');
                    }
                } else {
                    elem.parent().removeClass('on');
                    elem.parents('.page11-floor-two-list').find('.page11-checkAll-div').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
});