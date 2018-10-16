app.directive('groupCheckOneSeventeen',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }

                //---------------三级选框全选二级选中---------------------
                var eNumber = elem.parent().parent().parent().parent().find('input');
                var flag = true;
                for (var i = 0; i < eNumber.length; i++) {
                    if (eNumber.eq(i).prop('checked') == false) {
                        flag = false;
                    }
                }
                if (flag) {
                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }


//---------------三级选框全选一级选中---------------------
                var eNumbertwo = elem.parent().parent().parent().parent().parent().parent().find('input');
                var flagtwo = true;
                for (var ii = 0; ii < eNumbertwo.length; ii++) {
                    if (eNumbertwo.eq(ii).prop('checked') == false) {
                        flagtwo = false;
                    }
                }
                if (flagtwo) {
                    elem.parent().parent().parent().parent().parent().parent().prev().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().parent().parent().prev().prev().find('p').removeClass('on').find('input').prop('checked', function () {
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