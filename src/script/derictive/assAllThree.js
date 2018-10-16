app.directive('assAllThree',['$rootScope', function ($rootScope) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (scope.checkAll) {
                    var a = elem.parents('.page3-fucking-list').find('input');
                    for (var i = 0; i < a.length; i++) {
                        if (!a.eq(i).attr('disabled')) {
                            a[i].checked = true;
                            a.eq(i).parent().addClass('on');
                        }
                    }
                } else {
                    var b = elem.parents('.page3-fucking-list').find('input');
                    for (var j = 0; j < b.length; j++) {
                        if (!b.eq(j).attr('disabled')) {
                            b[j].checked = false;
                            b.eq(j).parent().removeClass('on');
                        }
                    }
                }
            });
        }
    }
}]);