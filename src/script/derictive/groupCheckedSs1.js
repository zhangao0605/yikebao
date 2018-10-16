app.directive('groupCheckedSs1', ["$rootScope", function ($rootScope) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    console.log(elem)
                    elem.parent().addClass('on');
                    // console.log(elem[0].attributes)
                    // console.log(elem)
                    $rootScope.sendValuePp1=elem[0].attributes[1].value;
                    elem.prop('disabled', function () {
                        return false})
                    elem.parent().parent().parent().parent().siblings().find('.page11-div-checkbox').css('background-color', '#7A7A7A').removeClass('on').find('input').prop('disabled', 'disabled');
                } else {
                    elem.parent().parent().parent().parent().parent().find('.page11-div-checkbox').css('background-color', 'white').removeClass('on').find('input').prop('disabled', function () {
                        return false
                    });
                }
            });
        }
    }
}]);
