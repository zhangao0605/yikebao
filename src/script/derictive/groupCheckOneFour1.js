app.directive('groupCheckOneFour1', ["$rootScope", "$http", function ($rootScope, $http) {
    return {
        link: function (scope, elem) {
            elem.click(function () {
                if (elem.prop('checked')) {
                    elem.parent().addClass('on');
                } else {
                    elem.parent().removeClass('on');
                }

                //==========================进行判断如果三级同栏内都为选中状态则对应的二级选中==========================
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
                //======================进行判断如果三级状态都为选中状态则对应的一级选中=========================
                var eNumbertwo = elem.parent().parent().parent().parent().parent().parent().find('input');
                var flagtwo = true;
                for (var ii = 0; ii < eNumbertwo.length; ii++) {
                    if (eNumbertwo.eq(ii).prop('checked') == false) {
                        flagtwo = false;
                    }
                }
                if (flagtwo) {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').addClass('on').find('input').prop('checked', function () {
                        return true
                    });
                } else {
                    elem.parent().parent().parent().parent().parent().parent().prev().find('p').removeClass('on').find('input').prop('checked', function () {
                        return false
                    });
                }
                scope.fuckArr = [];
                for (var i = 0; i < $('.page17-wx-input').length; i++) {
                    if ($('.page17-wx-input').eq(i).prop('checked')) {
                        scope.fuckArr.push($('.page17-wx-input').eq(i).parent().next().attr('title'));
                    }
                }
                $rootScope.table2AllChecks=scope.fuckArr.length;
                if ($rootScope.page5getMoreData == 10) {
                    $http.get($rootScope.link + '/wechat/getWechatsByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=1000').success(function (data) {
                        if (data.code == 200) {
                            $rootScope.page3Data4AllData = data.data.content;
                        } else {
                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                }else {
                    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=1&pageSize=15').success(function (data) {
                        if (data.code == 200) {
                            scope.page1InitDataLength = data.data.content.length;
                            $('.page2-table1-page').pagination({
                                totalData: scope.page1InitDataLength,
                                pageCount: 1,
                                showData: 15,
                                coping: true,
                                count: 2,
                                callback: function (api) {
                                    var data = {
                                        page: api.getCurrent(),
                                    };
                                    $http.get($rootScope.link + '/device/getDeviceByDevice?devices=' + JSON.stringify(scope.fuckArr) + '&pageNo=' + data.page + '&pageSize=15').success(function (data) {
                                        $rootScope.equipList4 = data.data.content;
                                        scope.page1InitDataLength = data.data.content.length;
                                    })
                                }
                            })
                            $rootScope.equipList4 = data.data.content;
                        } else {

                            $('.page1-alert-small-danger').show(300).find('.page1-alert-small-danger-con').html('&nbsp;&nbsp;数据加载失败，请重试并检查设备连接');
                            setTimeout(function () {
                                $('.page1-alert-small-danger').hide(300)
                            }, 2000)
                        }
                    });
                }



            });
        }
    }
}]);