app.directive('groupAllCheckedEl',["$rootScope",function ($rootScope){
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    $rootScope.upMsg=1
                    elem.parent().addClass('on');
                    elem.parents('.page11-floor-two-list').find('.page11-div-checkbox').addClass('on').find('input').prop('checked', 'checked');
                } else {
                     $rootScope.upMsg=0
                    elem.parent().removeClass('on');
                    elem.parents('.page11-floor-two-list').find('.page11-div-checkbox').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
            });
        }
    }
}]);
