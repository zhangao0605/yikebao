app.directive('groupAllCheckedNine', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                    elem.parents('.page9-one-list').find('.page9-checked').addClass('on').find('input').prop('checked', 'checked');
                } else {
                    elem.parent().removeClass('on');
                    elem.parents('.page9-one-list').find('.page9-checked').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
});
