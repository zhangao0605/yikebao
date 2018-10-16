app.directive('groupCheckAllSeventeen', ["$rootScope", "$http", function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {

                if (elem.prop('checked')) {
                    elem.parent().addClass('on');

                    //--------------------二级选中给三级添加选中状态---------------------
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                    elem.parent().parent().next().next().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });


                    var eNumberfour = elem.parent().parent().parent().parent().find('input');
                    var flagfour = true;
                    for (var i = 0; i < eNumberfour.length; i++) {
                        if (eNumberfour.eq(i).prop('checked') == false) {
                            flagfour = false;
                        }
                    }
                    if (flagfour) {
                        elem.parent().parent().parent().parent().prev().prev().find('p').addClass('on').find('input').prop('checked', function () {
                            return true
                        });
                    } else {
                        elem.parent().parent().parent().parent().prev().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                            return false
                        });
                    }
                } else {
                    //-------二级选中取消-------
                    elem.parent().parent().parent().parent().prev().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().next().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });

                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.page17-wx-input').length; i++) {
                    if ($('.page17-wx-input').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=17').success(function (data) {
                    $rootScope.fuckList = data.data.content;
                    $('#pages17').Page({
                        totalPages: data.data.totalPages,//分页总数
                        liNums: 5,//分页的数字按钮数(建议取奇数)
                        activeClass: 'activP', //active 类样式定义
                        callBack: function (page) {
                            $http.get($rootScope.link + '/device/getDeviceByDevice/?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + page + '&pageSize=17').success(function (data) {
                                $rootScope.fuckList = data.data.content;
                            })
                        }
                    });
                });
            });
        }
    }
}]);