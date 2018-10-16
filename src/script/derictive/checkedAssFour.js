app.directive('checkedAssFour',["$rootScope",function ($rootScope) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }
                if (scope.checked.length === $rootScope.equipList4.length) {
                    elem.parents('.page4-floor-one-list').find('span').eq(0).addClass('on');
                } else {
                    elem.parents('.page4-floor-one-list').find('span').eq(0).removeClass('on');
                }
            });
        }
    }
}]);
