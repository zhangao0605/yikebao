app.directive('mChecked',["$timeout",function ($timeout) {
    return {
        link: function (scope, elem) {
            elem.parent().addClass('on').show();
            $timeout(function () {
                if (elem.attr("mess_id") != 1 && elem.parent().parent().next().find('li').length > 0) {
                    elem.prop('checked', function () {
                        return true
                    });
                    elem.parent().addClass('on').show();
                    elem.parent().parent().next().show();
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });

                }
            }, 0);
        }
    }
}]);