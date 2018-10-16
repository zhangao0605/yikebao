app.directive('tableEdit', ["$rootScope", function ($rootScope) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                elem.parent().prev().prev().prev().prev().prev().find('input').removeClass('on').removeAttr('readonly');
                elem.addClass('ce')
                elem.prev().removeClass('cs');
            });
        }
    }
}]);