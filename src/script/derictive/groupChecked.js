app.directive('groupChecked',["$timeout",function ($timeout) {
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
                    scope.daluan=1;
                    elem.parent().addClass('on');
                } else {
                    scope.daluan=0;
                    elem.parent().removeClass('on');
                }
            });
        }
    }
}]);
