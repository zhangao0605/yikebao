app.directive('groupCheckedNine', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                    var checkArr = elem.parents('.page9-one-list').find('.page9-checked');
                    for (var k = 0, flag = true; k < checkArr.length; k++) {
                        if (!checkArr.eq(k).find('input').prop('checked')) {
                            flag = false;
                        }
                    }
                    if (flag) {
                        elem.parents('.page9-one-list').find('.page9-checked-all').addClass('on').find('input').prop('checked', 'checked');
                    }
                } else {
                    elem.parent().removeClass('on');
                    elem.parents('.page9-one-list').find('.page9-checked-all').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
});
