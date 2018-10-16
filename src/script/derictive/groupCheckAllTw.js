app.directive('groupCheckAllTw',["$rootScope","$http",function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                    elem.parent().parent().next().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });


                    elem.parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });


                } else {
                    //-------二级选中取消-------
                    elem.parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                    ////-------三级选中取消-------
                    //elem.parent().parent().parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                    //    return false
                    //});
                    elem.parent().removeClass('on');
                    elem.parent().parent().next().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });

                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.new-wx-equip-input12').length; i++) {
                    if ($('.new-wx-equip-input12').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.new-wx-equip-input12').eq(i).parent().next().attr('title'));
                    }
                }
                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=16').success(function (data) {
                    if (data.code == 200) {
                        $rootScope.MemberList12 = data.data.content;
                        $('#pages12').Page({
                            totalPages: data.data.totalPages,//分页总数
                            liNums: 5,//分页的数字按钮数(建议取奇数)
                            activeClass: 'activP', //active 类样式定义
                            callBack: function (page) {
                                $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + page + '&pageSize=16').success(function (data) {
                                    $rootScope.MemberList12 = data.data.content;
                                })
                            }
                        });
                    }else{
                        alert(data.msg)
                    }
                });
            });
        }
    }
}]);
