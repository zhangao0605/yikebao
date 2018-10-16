app.directive('gFour',["$timeout",function ($timeout) {
    return {
        link: function (scope, elem) {
            $timeout(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }
            }, 0);
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }
            });
        }
    }
}]);
