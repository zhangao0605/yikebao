app.directive('groupCheckedEl',function () {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }
            });
        }
    }
});
