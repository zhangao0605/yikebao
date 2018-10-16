app.directive('assOneThree',['$rootScope', function ($rootScope) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }
                // if (scope.checked.length === scope.isAll.length) {
                //     elem.parents('.page3-fucking-list').find('.page3-div-checkbox').eq(0).addClass('on');
                // } else {
                //     elem.parents('.page3-fucking-list').find('.page3-div-checkbox').eq(0).removeClass('on');
                // }
            });
        }
    }
}]);
