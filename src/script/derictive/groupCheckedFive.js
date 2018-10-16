app.directive('groupCheckedFive', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().removeClass('on');
                    var checkArr = elem.parents('.page5-floor-one-list').find('.page5-div-checkbox');
                    for (var k = 0, flag = true; k < checkArr.length; k++) {
                        if (!checkArr.eq(k).find('input').prop('checked')) {
                            flag = false;
                        }
                    }
                    if (flag) {
                        elem.parents('.page5-floor-one-list').find('.page5-checkAll-div').removeClass('on').find('input').prop('checked', 'checked');
                    }
                } else {
                    elem.parent().addClass('on');
                    elem.parents('.page5-floor-one-list').find('.page5-checkAll-div').addClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
});
