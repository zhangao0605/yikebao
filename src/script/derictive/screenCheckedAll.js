app.directive('screenCheckedAll', function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                    elem.parent().parent().parent().parent().parent().next().find('.canvas-ul').find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().removeClass('on');
                    elem.parent().parent().parent().parent().parent().next().find('.canvas-ul').find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
});
