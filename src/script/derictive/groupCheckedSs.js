app.directive('groupCheckedSs', ["$rootScope", function ($rootScope) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    var checkArr = elem.parents('.page3-table-up-telephone').find('.page3-div-checkbox');
                    if (checkArr.length == 1) {
                        elem.parent().addClass('on');
                        if (elem.attr('data') == '精准加人') {
                            $rootScope.farGo = false;
                        } else {
                            $rootScope.farGo = true;
                        }
                        // elem.parents().parents().parents().parents().siblings().find('.page2-table3-group').css('background-color', '#7A7A7A').find('input').prop('disabled', 'disabled');
                        $rootScope.sendValuePp = elem[0].value
                        $rootScope.page29Wnum = elem.attr('data2');
                        $rootScope.page29Number = elem.attr('data3');
                        $rootScope.page29Id = elem.attr('data4');
                        $rootScope.page29Type = elem.attr('data5');
                    } else {
                        for (var k = 0, flag = true; k < checkArr.length; k++) {
                            if (!checkArr.eq(k).find('input').prop('checked')) {
                                flag = false;
                            }
                        }
                        if (flag) {
                            elem.parents().parents().parents().parents().find('.page2-table3-group').css('background-color', 'white').find('input').prop('disabled', function () {
                                return false
                            });
                            $rootScope.page29Id = ''
                            $rootScope.sendValuePp = undefined
                        } else {
                            elem.parent().addClass('on');
                            if (elem.attr('data') == '精准加人') {
                                $rootScope.farGo = false;
                            } else {
                                $rootScope.farGo = true;
                            }
                            elem.parents().parents().parents().parents().siblings().find('.page2-table3-group').css('background-color', '#7A7A7A').find('input').prop('disabled', 'disabled');

                            $rootScope.sendValuePp = elem[0].value
                            $rootScope.page29Wnum = elem.attr('data2');
                            $rootScope.page29Number = elem.attr('data3');
                            $rootScope.page29Id = elem.attr('data4');
                            $rootScope.page29Type = elem.attr('data5');
                        }
                    }
                } else {
                    elem.parents().parents().parents().parents().find('.page2-table3-group').removeClass('on');
                    elem.parents().parents().parents().parents().find('.page2-table3-group').css('background-color', 'white').find('input').prop('disabled', function () {
                        return false
                    });
                    $rootScope.page29Id = ''
                    $rootScope.sendValuePp = undefined
                }
            });
        }
    }
}]);
