app.directive('canUser',["$timeout",function ($timeout) {
    return {
        link: function (scope, elem) {
            $timeout(function () {
                if (elem.prop('checked')) {
                    elem.parent().parent().parent().parent().find('.page4CelueB').removeAttr('disabled').css('background', '#2abf9e');
                } else {
                    elem.parent().parent().parent().parent().find('.page4CelueB').attr('disabled', 'disabled').css('background', '#a6a6a6');
                }
            }, 0)
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().parent().parent().parent().find('.page4CelueB').removeAttr('disabled').css('background', '#2abf9e');
                } else {
                    elem.parent().parent().parent().parent().find('.page4CelueB').attr('disabled', 'disabled').css('background', '#a6a6a6');
                }
            })
        }
    }
}]);
